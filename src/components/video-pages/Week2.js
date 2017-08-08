import React from 'react';
import Immutable from 'immutable';
import VideoPage from '../VideoPage';

//be sure to rename the class
export default class Week2 extends React.Component {
  render() {
    const healthAndFitness = (
      <div className="video-content">
        <p className="body">
          Not too over complicated this week. We are going to
          keep with your Health goals. Simple and to the point!
        </p>
        <p className="body">
          Let’s start to break down why you want to make improvements
          through your fitness dimension.
        </p>
        <h4 className="small-green-header">
          Action Steps
        </h4>
        <p className="body">
          Complete&nbsp;
          <a
            href={"https://docs.google.com/forms/d/e/" +
                  "1FAIpQLSc9A8ZL02AgyhtAEgMzpn2UCt2x3oZD4NRba801HbT-gte_IA/" +
                  "viewform?usp=sf_link"}
          >
           this form
          </a>
          &nbsp;When completing the document, take time and think about
          exactly how, where and why you want your fitness to change?
          Once you identify where you want to be, the plan to get there
          will begin to form.
        </p>
        <p className="body">
          <span>Let's get all over it!</span>
        </p>
      </div>
    );

    const mentalHealthAndWellbeing = (
      <div className="video-content">
        <p className="body">
          The purpose of this video and associated information is to arm individuals
          with the knowledge and understanding of which symptoms to look out for.
          Mental Health issues affect 1 in 4 of the UK population, so if it’s not
          you, it’s definitely someone you know. Start to be a little more self-aware
          and mindful of those you come in contact with.
        </p>
        <p className="body">
          <span>Buzz words associated with Mental Health and Wellbeing:</span>
        </p>
        <p className="body">
          • Anxiety<br />
          • Bipolar<br />
          • Eating<br />
          • Depression<br />
          • Personality disorder<br />
          • PTSD<br />
          • Stress<br />
        </p>
        <p className="body">
          <span>Warning Signs for yourself and the people close to you:</span>
        </p>
        <p className="body">
          • Feeling down all the time, sad for no apparent reason<br />
          • Confused<br />
          • Easily distracted<br />
          • Scared<br />
          • Withdrawn<br />
          • Mood swings<br />
          • Low energy<br />
          • Sickness<br />
        </p>
        <p className="body">
          You now have the knowledge and the tools to look introspectively or help a
          friend. Your call!
        </p>
      </div>
    );


    const familyAndCommunityRelationships = (
      <div className="video-content">
        <h4 className="small-green-header">
          Remember Your Responsibility!!!
        </h4>
        <p className="body">
          We are going to keep driving this message home every
          week. You have a responsibility. Whether it’s to yourself
          or the people around you. You have a responsibility.
          Let’s start acting and behaving like we do!!!
        </p>
        <h4 className="small-green-header">
          Action steps:
        </h4>
        <p className="body">
          Take the 7 points from the video, write them out and
          now attach them to a particular day of the week. You
          are going to work on achieving one of those tasks/points
          for consideration every day. Just one per day.
        </p>
        <p className="body">
          <span>For example:</span><br />
          Monday: - lead by example.<br />
          Tuesday: - look to the good in a person or situation
          first, then make a decision.<br />
          Wednesday: - Make a point of responding to situations
          rather than reacting.<br />
        </p>
        <p className="body">
          Each day we want you to write in your journal and your
          planner. Explain what your task/point for consideration
          is and how you are going to go about achieving it for that day!
        </p>
        <p className="body">
          <span>For example:</span><br />
          Monday: - Lead by example<br />
          <span>Journal/planning entry (morning)</span><br />
          “Today I am going to make a point of when I drop my children off
          at the nursery I am going to speak to, and genuinely ask about how
          people are, use manners, hold doors and be respectful. I
          am aware the children may or may not see these actions. If they
          don’t, someone else may see, I am actually going to be a nice
          person and If they do see, it a bonus. I want it to become
          second nature to them.”
        </p>
        <p className="body">
          <span>Journal/planning entry (evening)</span><br />
          Record in the evening, when you did what you set out to for that day,
          what it was, how you felt and did you set a good example?<br />
          “Bear noticed that I was polite and said hello to another
          parent at nursery, he then said hello to the next parent he saw,
          and they complimented on how polite he was and those manners
          are few and far between nowadays.”
        </p>
        <p className="body">
          Do this every day for the week and see how you feel after 7 days.
        </p>
      </div>
    );

    const careerAndWorkLifeBalance = (
      <div className="video-content">
        <p className="body">
          This week’s video looks at changing your approach to your
          working day. I want you to now think about “Why you get
          up in the morning and go to work?” We all have our different
          reasons. This week I want you to discover yours.
        </p>
        <h4 className="small-green-header">
          Tasks
        </h4>
        <p className="body">
          1. Make a list of all of the reasons you go to work, why you
          like your job, why you do your job?<br />
          2. Make a list of the negative aspects (the cons) of your
          current employment position.<br />
          3. Write down what your ideal job looks like? We want you to
          get specific with regards to this aspect. Take time out of
          your busy week and sit down and visualize what your ideal job
          looks like.<br />
        </p>
        <h4 className="small-green-header">
          Action Steps
        </h4>
        <p className="body">
          By completing the task above, you will take the firsts steps towards
          identifying why you go to work, and if your reason is strong
          enough to stay doing what you do! The good news is it’s ok to
          change your mind, and to want to stay where you are. Let’s make sure!
        </p>
      </div>
    );

    const wealthAndFinancialWellbeing = (
      <div className="video-body">
        <p className="body">
          Congratulations on completing the budget for your month,
          if you have not done this yet, you are going to struggle with
          the next actionable steps.
        </p>
        <p className="body">
          The whole point of the budget was to determine where your money
          is going every month, every week and every day. Once you have
          done this, it is then easier to work out where changes can be
          made. Remember we are looking at paying ourselves first.
        </p>
        <p className="body">
          Today we begin to take action.
        </p>
        <h4 className="small-green-header">
          Action Steps
        </h4>
        <p className="body">
          Complete a budget review, where is the money going, what
          is considered excess, or where is money being spent that you
          can instantly make a change towards today.
        </p>
        <p className="body">
          Having now identified the amount, it's time to pay yourself
          first. Set up a direct debit from your account into a
          saving account; start small if you are feeling nervous about
          it. But starting is the important part in this week's steps.
        </p>
        <p className="body">
          Pay your self first – the money needs to come out of your account
          the day it goes in, or the next day. Once you have spent a
          couple of months doing this, you will notice it doesn’t feel
          as bad as originally planned.
        </p>
        <p className="body">
          You are now on the road to a healthier Wealth situation, and
          it starts with paying yourself first.
        </p>
      </div>
    );

    const selfActualization = (
      <div className="video-content">
        <p className="body">
          So you are starting to get a grip of Self-Actualisation,
          or at least a greater understanding of what it is and what
          it might look like for you.
        </p>
        <p className="body">
          This week You have 4 things to think about. I want you to
          take the time to address only one task at a time. Full attention
          required.
        </p>
        <h4 className="small-green-header">
          Tasks:
        </h4>
        <p className="body">
          1. I want you to plan time for yourself every day. It can be
          10 mins or 2 hours, just plan it and get into some time for
          yourself. You need to be in a good place with yourself before
          you can be with others.<br />
          2. Now that you are starting to get to know yourself a little
          better, its time you begin the process of fully accepting you
          for who and what you are. List the good and the bad of you right
          now. Good first.<br />
          3. Trust the process of doing what you feel you should be.
          Write down, what that looks like for you.<br />
          4. Linked to number 3, imagine that money is no object, you
          couldn’t fail. What would you do? This does not need to be
          career or wealth related, this exercise can be applied to all
          of the MYP dimensions.<br />
        </p>
        <p className="body">
          Remember nobody knows you, understands you better than you.
          So take the time to get to know YOU!
        </p>
      </div>
    );

    const videos = Immutable.fromJS({
      "Health & Fitness": {
        "videoLink": "QGLYXYGzE1k",
        "class": "purple",
        "info": healthAndFitness
      },
      "Mental Health and Wellbeing": {
        "videoLink": "caztPLizaUY",
        "class": "yellow",
        "info": mentalHealthAndWellbeing
      },
      "Family & Community Relationships": {
        "videoLink": "5hnywiaI1_Q",
        "class": "pink",
        "info": familyAndCommunityRelationships
      },
      "Career & Work/Life Balance": {
        "videoLink": "lKzISCtkJN4",
        "class": "orange",
        "info": careerAndWorkLifeBalance
      },
      "Wealth & Financial Wellbeing": {
        "videoLink": "lKzISCtkJN4",
        "class": "red",
        "info": wealthAndFinancialWellbeing
      },
      "Self-Actualization": {
        "videoLink": "PeEM0TaK4tQ",
        "class": "blue",
        "info": selfActualization
      }
    });

    const title = "MYP Boost! — Week Two";

    //appears before videos on the pages
    const firstSection = (
      <div className="first-section">
        <p className="body">
          Welcome to Week 2 of your MYP Boost service. We hope your first week
          has been good, and I am sure some of this will still feel a little
          alien. This is perfectly normal. You are trying to change habits and
          behaviours that have been in play for your entire life.
        </p>
        <p className="body">
          First up, give yourself a massive congratulations for signing up
          and starting your journey. That’s the hardest part; getting out the
          door and taking that first step. To help you now moving forward I
          invite you to join the&nbsp;
          <a href="https://www.facebook.com/groups/1800343386937722/">
            MYP Boost Closed Facebook group.
          </a>
          &nbsp;This is an
          online community designed to help every member of Boost share their
          experiences and to encourage each other to keep working hard. Go
          now and join the group.
        </p>
        <p className="body">
          Week 2 is live!
        </p>
        <p className="body">
          Remember to concentrate on the areas you have previously identified
          as your top 3. It’s MYP time!
        </p>
      </div>
    );

    //appears after videos on the pages
    const secondSection = (
      <div className="second-section">
        <p className="body">
          Don’t forget to like Maximise Your Potential on&nbsp;
          <a href="https://www.facebook.com/MYP.global/">Facebook</a>
          &nbsp;and join the&nbsp;
          <a href="https://www.facebook.com/groups/1800343386937722/">
            closed Facebook MYP Boost group.
          </a>
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
