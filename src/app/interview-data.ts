
export const interviewdata = {
    name: 'Forensic Interview',
    phases: [
      {
        name: `Introduce Yourself and Start Building Rapport`,
        sections: [
          {
            name: `Add identifying information to the recording`,
            topics: [
              {
                text: `My name is [first and last name]. It is [date] at [time]. I am interviewing [child’s first and last
                  name] at [location]. With us is [first and last name], who is [individual’s role; e.g., language
                  interpreter for Mandarin Chinese].`
              }
            ]
          },
          {
            name: `Face-to-Face: Young Child`,
            topics: [
              {
                text: `Hello, [child’s name]. My name is [interviewer’s name]. My job is to listen to kids. Today is my day
                     to listen to you. I talk with a lot of children about what’s been happening in their lives. We are
                     going to talk for a while and then I’ll take you back to the other room where your [mom, dad,
                     etc.] is waiting for you. [Ask a few simple questions to get to know the child, as needed.]
                     I have a [video camera, recorder] here. It is recording what we say. Everything you say is
                     important and I want to get it right.`
              }
            ]
          },
          {
            name: `Face-to-Face: School-Age Child`,
            topics: [{
              text: `Hello [child’s name]. My name is [interviewer’s name]. I’m a [social worker, police officer, etc.] My
              job is to talk with [children, or children, teens, and young adults]. I talk with a lot of [children, teens,
              people] in [name of town]. Do you know what a [social worker, police officer, etc.] does? [Wait for
              response and react to child’s answer; e.g., “Some social workers/police officers do that, but part of
              my job is to get to know [children, teens, people] and talk about what’s been happening in their
              lives.”`
            }, {
              text: `As you can see, I have a [video camera, recorder] here. It will record what we say. Everything
              you say is important and I want to get it right. Also, I’m part of a team that is helping me do my
              job, and the recording helps the team.`
            }]
          },
          {
            name: `Tele-Forensic Interview`,
            topics: [
              {
                     text: `Hi [child's name]. My name is [interviewer’s name]. My job is to talk with [children, teens, and
             young adults]. I talk with a lot of [children, teens, people] in [name of town]. [Personalize the
             conversation with any rapport-building comments you would deliver in a face-to-face interview,
             either starting here or waiting until you have completed preliminary instructions.]`
              }
            ]
          }
          
        ]
      },
      {
        name: `Phase 2`,
        sections: [
            {
                name: `Section 1 Name`,
                topics: [
                    {
                        text: `Topic text`
                    },
                    {
                        isInstruction: true,
                        text: `Instruction text`
                    },
                    {
                        text: `Another topic`
                    }
                ]
            },
            {
              name: 'Second Section',
              topics: [

              ]
            }
        ]
      }
    ]
  };
