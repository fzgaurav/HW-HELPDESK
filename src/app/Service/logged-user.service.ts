import { Injectable } from '@angular/core';
const TOKEN_KEY = 'AuthToken';
const USERID_KEY = 'LOGGEDUSERID';
const USERNAME_KEY = 'LOGGEDUSERNAME';
const ROLEID_KEY = 'LOGGEDROLEID';
const ROLENAME_KEY = 'LOGGEDROLE';
const DAILERID_KEY = 'LOGGEDDAILERID';
@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {

  constructor() { }
  signOut() {
    debugger;
    window.sessionStorage.clear();
  }

  /*SET AND GET ROLE ID*/
  public saveRoleId(roleID: string) {
    window.sessionStorage.removeItem(ROLEID_KEY);
    window.sessionStorage.setItem(ROLEID_KEY, roleID);
  }

  public getRoleId(): string {
    return sessionStorage.getItem(ROLEID_KEY);
  }
  /*END*/

  /*SET AND GET ROLE NAME*/
  public saveRoleName(roleName: string) {
    window.sessionStorage.removeItem(ROLENAME_KEY);
    window.sessionStorage.setItem(ROLENAME_KEY, roleName);
  }

  public getRoleName(): string {
    return sessionStorage.getItem(ROLENAME_KEY);
  }
  /*END*/

  /*SET AND GET DAILER ID*/
  public saveDailerID(dailerID: string) {
    window.sessionStorage.removeItem(DAILERID_KEY);
    window.sessionStorage.setItem(DAILERID_KEY, dailerID);
  }

  public getDailerID(): string {
    return sessionStorage.getItem(DAILERID_KEY);
  }
  /*END*/

  /*SET AND GET USER ID*/
  public saveUserId(userID: string) {
    window.sessionStorage.removeItem(USERID_KEY);
    window.sessionStorage.setItem(USERID_KEY, userID);
  }

  public getUserId(): string {
    return sessionStorage.getItem(USERID_KEY);
  }
  /*END*/

  /*SET AND GET USERNAME*/
  public saveUsername(userName: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, userName);
  }

  public getUserName(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }
  /*END*/

  

  

}
