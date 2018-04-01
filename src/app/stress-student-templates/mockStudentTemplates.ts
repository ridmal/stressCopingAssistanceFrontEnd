import { stressStudentTemplate } from './stressStudentTemplate';

export const StressStudentTemplates : stressStudentTemplate[] = [
  { id: 1, 
    name: 'Template 1',
    filled:true,
    personalityType:'introvert',
    stressEvent:'Exam',
    stressSolutions:[
        {stressLevel:'high',solutions:[{sid:1,sdetails:'talk to someone'},{sid:2,sdetails:'do a little walk'}]},
        {stressLevel:'meduim',solutions:[{sid:1,sdetails:'read a book'}]},
        {stressLevel:'low',solutions:[{sid:1,sdetails:'listen to music'}]}
        ] 
    },
      { id: 2, 
    name: 'Template 2',
    filled:true,
    personalityType:'extrovert',
    stressEvent:'Exam',
    stressSolutions:[
        {stressLevel:'high',solutions:[{sid:1,sdetails:'talk to someone'},{sid:2,sdetails:'do a little walk'}]},
        {stressLevel:'meduim',solutions:[{sid:1,sdetails:'read a book'}]},
        {stressLevel:'low',solutions:[{sid:1,sdetails:'listen to music'}]}
        ] 
    },
      { id: 3, 
    name: 'Template 3',
    filled:true,
    personalityType:'introvert',
    stressEvent:'Financial',
    stressSolutions:[
        {stressLevel:'high',solutions:[{sid:1,sdetails:'talk to acadamic adviser'},{sid:2,sdetails:'talk to lecturer'}]},
        {stressLevel:'meduim',solutions:[{sid:1,sdetails:'find details about student loans'}]},
        {stressLevel:'low',solutions:[{sid:1,sdetails:'talk to a freind'}]}
        ] 
    },
      { id: 4, 
    name: 'Template 4',
    filled:false,
    personalityType:'extrovert',
    stressEvent:'Financial',
    stressSolutions:[
        {stressLevel:'high',solutions:[{sid:null,sdetails:''}]},
        {stressLevel:'meduim',solutions:[{sid:null,sdetails:''}]},
        {stressLevel:'low',solutions:[{sid:null,sdetails:''}]}
    ]
    }

 
];