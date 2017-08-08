import React from 'react';
import Immutable from 'immutable';
import VideoPage from '../VideoPage';

//be sure to rename the class
export default class Week1 extends React.Component {
  render() {
    const healthAndFitness = (
      <div className="video-content">
        <p className="body">
          We are going to keep this nice and simple to start with.
          You need to identify your “WHY?“…
        </p>
        <p className="body">
          Why do you want to improve your Health? You need to look
          into your motivations. Is it related to personal health,
          family health? Is it responsibility based or do you simply
          want to stop a bad habit?
        </p>
        <p className="body">
          Whatever it is, you need to identify it!
        </p>
        <h4 className="small-green-header">
          Action Steps
        </h4>
        <p className="body">
          Complete&nbsp;
          <a href="https://goo.gl/forms/qPFZQ4O7b8MMJIk62">this</a>
          &nbsp;form and identify your health goals for the next 365 days.
        </p>
        <p className="body">
          Remember to make a note of your WHY? and of your GOALS in your
          journal. That’s right, you need to get a journal.
        </p>
        <p className="body">
          <span>Let’s get after it!!!</span>
        </p>
      </div>
    );

    const mentalHealthAndWellbeing = (
      <div className="video-content">
        <h4 className="small-green-header">
          What's the definition of Psychological Wellbeing?
        </h4>
        <p className="body">
          Basically can you cope with everyday life, function and
          operate within your surroundings?
        </p>
        <h4 className="small-green-header">
          6 areas to think about
        </h4>
        <p className="body">
          1. Self-acceptance<br/>
          2. Quality relationships<br/>
          3. State of autonomy<br/>
          4. Growth<br/>
          5. Can you manage your current situation?<br/>
          6. Setting Goals<br/>
        </p>
        <h4 className="small-green-header">
          Action Steps
        </h4>
        <p className="body">
          Watch the video above!
        </p>
        <p className="body">
          Identify where you are right now, making direct reference
          to the 6 areas, including setting goals for the future
          with regards to your Psychological Wellbeing.
        </p>
      </div>
    );

    const familyAndCommunityRelationships = (
      <div className="video-content">
        <h4 className="small-green-header">
          What is your responsibility?
        </h4>
        <p className="body">
          Regardless of what you think or feel, you need to understand
          that you have a responsibility. A responsibility to the people
          close to you, the people you come in contact with and the
          people you influence through your presence.
        </p>
        <p className="body">
          Positive and negative impacts are everywhere.
        </p>
        <h4 className="small-green-header">
          Action steps:
        </h4>
        <p className="body">
          I want you to now buck the trend of societies default response
          of being negative and be overly positive. You will feel good,
          and the person you interact with also feel good.
        </p>
        <p className="body">
          Remember you have a responsibility!!!
        </p>
        <p className="body">
          Think about “Crossing the Road”... Green and versus red man
          (see the video)
        </p>
        <p className="body">
          Make a note now in your JOURNAL (still not got one? Go and
          get one now!!!)
        </p>
        <p className="body">
          Who do you have a direct influence on? Who is going to be
          influenced by your actions?
        </p>
        <p className="body">
          Start close to home and slowly grow out, family, friends,
          neighbours, work colleagues and then people you come in
          contact with in society.
        </p>
        <p className="body">
          Make a conscious effort to be mindful of the people around
          you and the influence both positive and negative that you could
          have on them.
        </p>
        <p className="body">
          Go and make the world a better place one interaction at a time.
        </p>
      </div>
    );

    const careerAndWorkLifeBalance = (
      <div className="video-content">
        <p className="body">
          This video is designed to help you identify where you are
          right now with regards to your current approach to your job.
          Like everything in life, honesty is the best policy. So think
          about your response and make a note of your answers to the
          following questions. These answers will set the tone and
          direction for your future decisions with regards to your
          career development and progression.
        </p>
        <h4 className="small-green-header">
          4 simple questions
        </h4>
        <p className="body">
          1. Are you building your dream or someones else’s dream?<br />
          2. Is the job you are doing right now the job you talked about,
          dreamed about as a child?<br />
          3. Does your job serve a purpose?<br />
          4. Is this job remotely linked to your passion?<br />
        </p>
        <h4 className="small-green-header">
          Action Steps
        </h4>
        <p className="body">
          Watch the video, listen to the content and answer the above questions.
        </p>
      </div>
    );

    const wealthAndFinancialWellbeing = (
      <div className="video-body">
        <p className="body">
          The first thing I want you to think about right now with regards
          to Wealth is to completely flip the script on how we currently
          think about saving money.
        </p>
        <p className="body">
          <span>PAY YOURSELF FIRST!!!</span>
        </p>
        <h4 className="small-green-header">
          Action steps
        </h4>
        <p className="body">
          Do a complete review of your Budget for one month. Remember honesty
          is the best policy, if you spend it, make a note of it. If you
          are unsure about exactly what you are spending your money on.
          Make a point of making a daily note of your expenditures for one
          week. Absolutely everything.
        </p>
        <p className="body">
          Then you can add this to the full monthly review of your Budget.
          Don't worry if this feels a little daunting, that feeling is
          completely natural, especially if like myself you may have
          never done this properly before. Do not put it off. Do it today.
        </p>
        <p className="body">
          <a href="./assets/budget_template.xlsx">Download</a> and complete
          a Budget sheet.
        </p>
      </div>
    );

    const selfActualization = (
      <div className="video-content">
        <p className="body">
          Let’s get our head around this, its simple, honestly it is.
          You just need to understand the different elements of Maslow’s
          Hierarchy of needs.
        </p>
        <h4 className="small-green-header">
          Let’s keep it simple
        </h4>
        <p className="body">
          3 zones with 5 elements. Zone 1 - Physical requirements.
          2 - Psychological needs. 3 - Self-Fulfilment.
        </p>
        <p className="body">
          Element 1 - Physiological needs (food, water, shelter, oxygen,
          warmth).
        </p>
        <p className="body">
          Element 2 - Safety needs (Personal Security, Financial Security,
          Health and Well-being, insurance - safety nets against accidents/illness.
        </p>
        <p className="body">
          Element 3 - Social Belonging/Love (friendship, intimacy and family)
          Having relationships and regular communication with others. Support
          systems in play, the sense and feeling of being part of a community.
        </p>
        <p className="body">
          Element 4 - Esteem (self-esteem, and seek esteem from others) Full
          understanding of emotions including fear, sadness, loneliness,
          happiness. Starting to fully accept one’s self.
        </p>
        <p className="body">
          Element 5 - Self - Actualisation (Having true mastery over the
          other elements, to truly think, learn, make decisions, have values
          and beliefs that are all yours and not influenced by others.
          A sense of obligation, and desire to help others. To find and
          entertain the premise of their true calling)
        </p>
        <h4 className="small-green-header">
          Action Steps
        </h4>
        <p className="body">
          What does Self Actualisation look like for you right now?
        </p>
        <p className="body">
          Write down your own definition for each of the 5 elements.
          What does each element mean and represent to you?
        </p>
        <p className="body">
          What does Self Actualisation look like for you in the future?
        </p>
        <p className="body">
          Rewrite the 5 elements thinking about your aspirations for each element.
        </p>
        <p className="body">
          The journey for you starts today. <span>LET'S GO!!!</span>
        </p>
      </div>
    );

    const videos = Immutable.fromJS({
      "Health & Fitness": {
        "videoLink": "u9YTgScYbSI",
        "class": "purple",
        "info": healthAndFitness
      },
      "Mental Health and Wellbeing": {
        "videoLink": "tZi0Ebj5los",
        "class": "yellow",
        "info": mentalHealthAndWellbeing
      },
      "Family & Community Relationships": {
        "videoLink": "S-t7znuLdNo",
        "class": "pink",
        "info": familyAndCommunityRelationships
      },
      "Career & Work/Life Balance": {
        "videoLink": "0wqFSyWcpx4",
        "class": "orange",
        "info": careerAndWorkLifeBalance
      },
      "Wealth & Financial Wellbeing": {
        "videoLink": "j1RkZydv02k",
        "class": "red",
        "info": wealthAndFinancialWellbeing
      },
      "Self-Actualization": {
        "videoLink": "pDpXUhtKbGM",
        "class": "blue",
        "info": selfActualization
      }
    });

    const title = "MYP Boost! — Week One";

    //appears before videos on the pages
    const firstSection = (
      <div className="first-section">
        <p className="body">
          Welcome to MYP Boost! You have made a commitment to YOURSELF and to
          those who are close to YOU. The key to MYP and YOUR success is the
          application of small consistent steps applied daily to YOUR routine.
          I encourage YOU to identify at the most 3 dimensions to work on.
          Once you start to engage and with the videos and the action steps
          YOU can begin to explore the other dimensions. Be mindful of taking
          on to much. Remember YOUR MYPco score and the dimensions identified
          to work on.
        </p>
        <p className="body">Let’s get to work!!!</p>
      </div>
    );

    //appears after videos on the pages
    const secondSection = (
      <div className="second-section">
        <p className="body">
          Don’t forget to like Maximise Your Potential on&nbsp;
          <a href="https://www.facebook.com/MYP.global/">Facebook</a> and join
          the closed Facebook MYP Boost group. <span>See you next week!</span>
        </p>
      </div>
    );

    return (
      <VideoPage
        videos={videos}
        title={title}
        firstSection={firstSection}
        secondSection={secondSection}
      />
    );
  }
}
