export class Users {
  public showDetails: boolean;
  constructor (public id: number, public username: string) {
    this.showDetails = false;
  }
}
