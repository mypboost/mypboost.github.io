import React from 'react';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import VideoPage from './VideoPage';

export default class Week1 extends React.Component {

  render() {
    const data = Immutable.fromJS({
      "Health & Fitness": {
        "imagePath": "./assets/week1/purple.jpg",
        "videoLink": "u9YTgScYbSI",
        "class": "purple",
        "info": [
          <p className="body" key={1}>
            We are going to keep this nice and simple to start with.
            You need to identify your “WHY?“…
          </p>,
          <p className="body" key={2}>
            Why do you want to improve your Health? You need to look
            into your motivations. Is it related to personal health,
            family health? Is it responsibility based or do you simply
            want to stop a bad habit?
          </p>,
          <p className="body" key={3}>
            Whatever it is, you need to identify it!
          </p>,
          <h4 className="small-green-header" key={4}>
            Action Steps
          </h4>,
          <p className="body" key={5}>
            Complete&nbsp;
            <a href="https://goo.gl/forms/qPFZQ4O7b8MMJIk62">this</a>
            &nbsp;form and identify your health goals for the next 365 days.
          </p>,
          <p className="body" key={6}>
            Remember to make a note of your WHY? and of your GOALS in your
            journal. That’s right, you need to get a journal.
          </p>,
          <p className="body" key={7}>
            <span>Let’s get after it!!!</span>
          </p>,
        ]
      },
      "Mental Health and Wellbeing": {
        "imagePath": "./assets/week1/yellow.jpg",
        "videoLink": "tZi0Ebj5los",
        "class": "yellow",
        "info": [
          <h4 className="small-green-header" key={1}>
            What's the definition of Psychological Wellbeing?
          </h4>,
          <p className="body" key={2}>
            Basically can you cope with everyday life, function and
            operate within your surroundings?
          </p>,
          <h4 className="small-green-header" key={3}>
            6 areas to think about
          </h4>,
          <p className="body" key={4}>
            1. Self-acceptance<br/>
            2. Quality relationships<br/>
            3. State of autonomy<br/>
            4. Growth<br/>
            5. Can you manage your current situation?<br/>
            6. Setting Goals<br/>
          </p>,
          <h4 className="small-green-header" key={5}>
            Action Steps
          </h4>,
          <p className="body" key={6}>
            Watch the video above!
          </p>,
          <p className="body" key={7}>
            Identify where you are right now, making direct reference
            to the 6 areas, including setting goals for the future
            with regards to your Psychological Wellbeing.
          </p>,
        ]
      },
      "Family & Community Relationships": {
        "imagePath": "./assets/week1/pink.jpg",
        "videoLink": "S-t7znuLdNo",
        "class": "pink",
        "info": [
          <h4 className="small-green-header" key={1}>
            What is your responsibility?
          </h4>,
          <p className="body" key={2}>
            Regardless of what you think or feel, you need to understand
            that you have a responsibility. A responsibility to the people
            close to you, the people you come in contact with and the
            people you influence through your presence.
          </p>,
          <p className="body" key={3}>
            Positive and negative impacts are everywhere.
          </p>,
          <h4 className="small-green-header" key={4}>
            Action steps:
          </h4>,
          <p className="body" key={5}>
            I want you to now buck the trend of societies default response
            of being negative and be overly positive. You will feel good,
            and the person you interact with also feel good.
          </p>,
          <p className="body" key={6}>
            Remember you have a responsibility!!!
          </p>,
          <p className="body" key={7}>
            Think about “Crossing the Road”... Green and versus red man
            (see the video)
          </p>,
          <p className="body" key={8}>
            Make a note now in your JOURNAL (still not got one? Go and
            get one now!!!)
          </p>,
          <p className="body" key={9}>
            Who do you have a direct influence on? Who is going to be
            influenced by your actions?
          </p>,
          <p className="body" key={10}>
            Start close to home and slowly grow out, family, friends,
            neighbours, work colleagues and then people you come in
            contact with in society.
          </p>,
          <p className="body" key={11}>
            Make a conscious effort to be mindful of the people around
            you and the influence both positive and negative that you could
            have on them.
          </p>,
          <p className="body" key={12}>
            Go and make the world a better place one interaction at a time.
          </p>,
        ]
      },
      "Career & Work/Life Balance": {
        "imagePath": "./assets/week1/orange.jpg",
        "videoLink": "0wqFSyWcpx4",
        "class": "orange",
        "info": [
          <p className="body" key={1}>
            This video is designed to help you identify where you are
            right now with regards to your current approach to your job.
            Like everything in life, honesty is the best policy. So think
            about your response and make a note of your answers to the
            following questions. These answers will set the tone and
            direction for your future decisions with regards to your
            career development and progression.
          </p>,
          <h4 className="small-green-header" key={2}>
            4 simple questions
          </h4>,
          <p className="body" key={3}>
            1. Are you building your dream or someones else’s dream?<br />
            2. Is the job you are doing right now the job you talked about,
            dreamed about as a child?<br />
            3. Does your job serve a purpose?<br />
            4. Is this job remotely linked to your passion?<br />
          </p>,
          <h4 className="small-green-header" key={4}>
            Action Steps
          </h4>,
          <p className="body" key={5}>
            Watch the video, listen to the content and answer the above questions.
          </p>,
        ]
      },
      "Wealth & Financial Wellbeing": {
        "imagePath": "./assets/week1/red.jpg",
        "videoLink": "j1RkZydv02k",
        "class": "red",
        "info": [
          <p className="body" key={1}>
            The first thing I want you to think about right now with regards
            to Wealth is to completely flip the script on how we currently
            think about saving money.
          </p>,
          <p className="body" key={2}>
            <span>PAY YOURSELF FIRST!!!</span>
          </p>,
          <h4 className="small-green-header" key={3}>
            Action steps
          </h4>,
          <p className="body" key={4}>
            Do a complete review of your Budget for one month. Remember honesty
            is the best policy, if you spend it, make a note of it. If you
            are unsure about exactly what you are spending your money on.
            Make a point of making a daily note of your expenditures for one
            week. Absolutely everything.
          </p>,
          <p className="body" key={4}>
            Then you can add this to the full monthly review of your Budget.
            Don't worry if this feels a little daunting, that feeling is
            completely natural, especially if like myself you may have
            never done this properly before. Do not put it off. Do it today.
          </p>,
          <p className="body" key={6}>
            <a href="./assets/budget_template.xlsx">Download and complete a Budget sheet.
          </p>,
        ]
      },
      "Self-Actualization": {
        "imagePath": "./assets/week1/blue.jpg",
        "videoLink": "pDpXUhtKbGM",
        "class": "blue",
        "info": []
      }
    })

    const title = "MYP Boost! — Week One";

    //this is an array and each element needs a comma after it
    const firstSection = [
      <p className="body" key={1}>
        Welcome to MYP Boost! You have made a commitment to YOURSELF and to
        those who are close to YOU. The key to MYP and YOUR success is the
        application of small consistent steps applied daily to YOUR routine.
        I encourage YOU to identify at the most 3 dimensions to work on.
        Once you start to engage and with the videos and the action steps
        YOU can begin to explore the other dimensions. Be mindful of taking
        on to much. Remember YOUR MYPco score and the dimensions identified
        to work on.
      </p>,
      <p className="body" key={2}>Let’s get to work!!!</p>,
    ]

    //this is an array and each element needs a comma after it
    const secondSection = [
      <p className="body" key={1}>
        Don’t forget to like Maximise Your Potential on&nbsp;
        <a href="https://www.facebook.com/MYP.global/">Facebook</a> and join
        the closed Facebook MYP Boost group. <span>See you next week!</span>
      </p>
    ]

    return (
      <VideoPage
        data={data}
        title={title}
        firstSection={firstSection}
        secondSection={secondSection}
      />
    );
  }
}
