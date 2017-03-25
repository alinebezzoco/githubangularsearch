import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'; 

@Injectable() 
export class GithubService { 
	private username: string;
	private client_id = '0e8814cc03484926ccf1';
	private client_secret = 'bb0fcd271fd62285227363c1efa1d8a717468195';

	constructor(private _http: Http) { 
		// console.log('Github service ready...');
		this.username = 'bezzocoaline';
	}

	getUser() { 
		return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
		.map(res => res.json());
	}

	getRepos() { 
		return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
		.map(res => res.json());
	}

	updateUser(username: string) { 
		this.username = username;
	}	
}	