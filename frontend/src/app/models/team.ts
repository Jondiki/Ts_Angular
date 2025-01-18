export class Team {
  location?: string;
  id: string;
  constructor(public title: string,
    public description: string,
    public number: number,
    public like: number,
    public imageUrl: string,
    public price?: number)
  {
    this.id = crypto.randomUUID();
    console.log(this);
   }

  addlike(): void {
    this.like += 1;
  }

  deleteLike(): void {
    this.like -= 1;
  }

  setLocation(location: string): void {
    this.location = location;
  }
  withLocation(location: string): Team {
    this.setLocation(location);
    return this;
  }
}
