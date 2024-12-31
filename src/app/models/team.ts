export class Team{

  constructor(  public title: string,
  public description: string,
  public number : number,
  public like : number,
    public imageUrl: string,
  public price?:number) {

  }

  addlike(): void{
    this.like+=1;
  }

  deleteLike(): void{
    this.like-=1;
  }

}
