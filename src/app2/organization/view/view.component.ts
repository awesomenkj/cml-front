import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GithubService } from '../services/github.service';
import { DaoService } from '../services/dao.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  public coin;
  public gitRequest;
  public gitOrganization;
  public gitRepositories = [];
  public gitMembers = [];
  public loaded = false;
  public isGithubFormVisible = false;
  public githubForm: FormGroup;
  public isGithubLoading = false;
  public websiteForm: FormGroup;
  public isWebsiteFormSubmitted;

  public constructor(
    private dao: DaoService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private gitService: GithubService
  ) {
    this.githubForm = this.fb.group({
      organization: fb.control('', Validators.required)
    });

    this.websiteForm = this.fb.group({
      website: fb.control('', Validators.compose([Validators.required]))
    });
  }

  public ngOnInit() {
    this.dao.getCoin(this.route.snapshot.params['label']).subscribe((coin) => {
      if (coin) {
        this.coin = coin;

        if (!this.coin.gitStatus.synced && this.coin.gitStatus.requestId) {
          this.gitService.getGitPoolRequest(this.coin.gitStatus.requestId).subscribe((request) => {
            this.gitRequest = request;
            this.isGithubLoading = false;

            if (this.gitRequest.status === 4) {

              this.gitService.getOrganization(this.gitRequest.data[0].value.toLowerCase()).subscribe((org) => {
                if (org) {
                  this.gitOrganization = org;

                  if (this.gitOrganization.id) {
                    this.gitService.getRepositoriesOfOrganization(this.gitOrganization.id).subscribe((repos) => {
                      this.gitRepositories = repos;
                    });
                    this.gitService.getMembersOfOrganization(this.gitOrganization.login).subscribe((members) => {
                      this.gitMembers = members;
                    });
                  }
                }
              });
            }
          });
        } else if (this.coin.gitStatus.synced) {
          this.gitService.getOrganizationById(this.coin.cmcId).subscribe((org) => {
            if (org.length === 1) {
              this.gitOrganization = org[0];

              if (this.gitOrganization.id) {
                this.gitService.getRepositoriesOfOrganization(this.gitOrganization.id).subscribe((repos) => {
                  this.gitRepositories = repos;
                });
                this.gitService.getMembersOfOrganization(this.gitOrganization.login).subscribe((members) => {
                  this.gitMembers = members;
                });
              }
            }
          });
        }
      }
      this.loaded = true;
    });
  }

  public showGithubForm = () => {
    this.isGithubFormVisible = true;
  };

  public hideGithubForm = () => {
    this.isGithubFormVisible = false;
  };

  public syncGithub = () => {
    if (this.githubForm.valid) {
      this.isGithubLoading = true;
      this.gitService.requestGithubOrganization(this.coin.slug, this.coin.cmcId,
        this.githubForm.controls['organization'].value);
    }
  };

  public linkGithub = () => {
    this.isGithubLoading = true;
    this.gitService.linkGithubOrganization(this.coin.slug, this.gitOrganization.login).then(() => {
      this.isGithubLoading = false;
    });
  };

  public resyncGithub = () => {
    if (this.coin.gitStatus.requestId) {
      this.isGithubLoading = true;
      this.gitService.retryGithubSync(this.coin.gitStatus.requestId).then(() => {
        this.isGithubLoading = false;
      });
    }
  };

  public cancelGithub = () => {
    this.isGithubLoading = true;
    this.gitService.cancelGithubSync(this.coin.slug).then(() => {
      this.isGithubLoading = false;
    });
  };

  public disableGithub = () => {
    this.isGithubLoading = true;
    this.gitService.disableGithub(this.coin.slug).then(() => {
      this.isGithubLoading = false;
    });
  };

  public enableGithub = () => {
    this.isGithubLoading = true;
    this.gitService.enableGithub(this.coin.slug).then(() => {
      this.isGithubLoading = false;
    });
  };

  public catculateRepositoryProperty = (property: string) => {
    const entries = this.gitRepositories.map((repo) => {
      return parseInt(repo[property] ? repo[property] : '0');
    });
    return entries.reduce((ac, next) => ac + next, 0);
  };

  public catculateCommits = () => {
    const entries = this.gitRepositories.map((repo) => {
      return parseInt(repo.defaultBranchRef ? repo.defaultBranchRef.target.history.totalCount : '0');
    });
    return entries.reduce((ac, next) => ac + next, 0);
  };

  public updateWebsite = () => {
    this.gitService.updateOrganizationWebsite(this.gitOrganization.login.toLowerCase(),
      this.websiteForm.controls['website'].value);
  };
}
