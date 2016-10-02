import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../shared/github-api.service';
import { FormBuilder } from '@angular/forms';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  repositories: any[];
  searchForm: any;
  isLoading: boolean;

  constructor(private githubApi: GithubApiService,
              private fb: FormBuilder,
              private slimLoadingBar: SlimLoadingBarService) {
  }

  ngOnInit() {

    this.searchForm = this.fb.group({
      query: '',
      sort: '',
      order: 'desc'
    });

  }

  getRepos(form) {
    this.slimLoadingBar.start();
    this.isLoading = true;

    this.githubApi.searchRepositories(form._value)
      .subscribe(res => {
        this.isLoading = false;
        this.slimLoadingBar.complete();
        this.repositories = res.items;
      }, err => {
        this.isLoading = false;
        console.log(err);
      })
  }

}
