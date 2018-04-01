export class stressStudentTemplate {
  id: number;
  name: string;
  filled:boolean;
  personalityType:string;
  stressEvent:string;
  stressSolutions:[{
      stressLevel:string,
      solutions:[{
          sid:number,
          sdetails:string
      }]
  }];
}