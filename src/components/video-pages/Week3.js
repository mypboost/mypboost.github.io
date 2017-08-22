import React from 'react';
import Immutable from 'immutable';
import VideoPage from '../VideoPage';

//be sure to rename the class
export default class Week3 extends React.Component {
  render() {
    const healthAndFitness = (
      <div className="video-content">
        <p className="body">
          Nutrition is what we are focusing on this week. Like last week we are
          keeping simple.
        </p>
        <p className="body">
          I want you to think about your body like a sports car. What fuel are
          you going to put into it? You are not going to put in diesel or some
          farm yard brew, that saves you some money in the short term but costs you
          dearly in the long run with internal engine damage. You should treat your
          body in the same way!
        </p>
        <p className="body">
          Natural food versus heavily processed food. Don’t take the short cut and
          go with the processed.
        </p>
        <h4 className="small-green-header">
          Action Steps
        </h4>
        <p className="body">
          Remove from your cupboards and fridges any food that is in a box or a
          packet. You know the type, heavily processed food is not good for you.
          Get it out the house TODAY.
        </p>
        <p className="body">
          Next time you go shopping or you order the food to your house, look at
          making the simple swaps:
        </p>
        <p className="body">
          <strong>Breakfast:</strong> Get rid of the full fat processed milk, go
          plant based with your milk or reduce the fat content. Go with whole grain
          cereals - porridge with fresh fruit. Stock up on whole grain bread with
          peanut butter and extra fruit. Stay natural.
        </p>
        <p className="body">
          <strong>Lunch:</strong> Get rid of the heavy sauces or the extra side
          dishes. Go with more veg, less boxed up quick fixes.
        </p>
        <p className="body">
          <strong>Dinner:</strong> start from scratch, make the whole dinner from
          simple and natural ingredients.
        </p>
        <p className="body">
          Follow&nbsp;
            <a
              href={"https://www.instagram.com/" +
              "bears_kitchen/"}
            >
              Bear’s Kitchen
            </a>
          &nbsp;on Instagram, for more tips and tasty treats.
        </p>
      </div>
    );

    const mentalHealthAndWellbeing = (
      <div className="video-content">
        <p className="body">
          How you start your day is the most important element of your day. You are
          now better equipped to respond to the day, to the work for the day and to
          influence the outcome of the day.
        </p>
        <p className="body">
          So let’s get your day off to a flying start.
        </p>
        <h4 className="small-green-header">
          Action Steps
        </h4>
        <p className="body">
          <strong>Morning Routines:</strong>
        </p>
        <p className="body">
          You will currently have a boring routine, you might not know it but you
          do. We are creatures of habit, let’s now make this morning habit a
          productive one.
        </p>
        <p className="body">
          Where to start? (This is based on my routine, I suggest picking 1 or 2
          elements, to begin with — e.g. meditation and journalling).
        </p>
        <p className="body">
          Set your alarm 30 minutes earlier than normal — this will allow for the
          new habits you are starting to form (it will also allow for a little
          snooze button action).
        </p>
        <p className="body">
          Have an understanding of why you are up and why you are looking to make
          changes.
        </p>
        <p className="body">
          <strong>Meditation time</strong> — if you have not meditated before, I
          would recommend any form of guided meditation. I work using youtube
          or an app called Headspace. 10 minutes of guided meditation sets me
          up for an awesome day. Don’t knock it until you have tried it (see
          links below).
        </p>
        <p className="body">
          <strong>Stretch</strong> - I always stretch with a little motivational
          clip from YouTube no more than 5–10 minutes.
        </p>
        <p className="body">
          <strong>Journal</strong> - Just start writing all the stuff that is in
          your head (I will get into this in greater detail in another video) for
          today, think about the previous day, what went well, what didn’t and
          3 things you are grateful for. Always end with a positive. Write out what
          your life goals are! (We will look at these goals in another video).
        </p>
        <p className="body">
          <strong>Plan the day</strong> - down to the hour. What you want to
          achieve and what you want to get done, always reconnect this back to
          your goals.
        </p>
        <p className="body">
          <strong>Read</strong> - take the time in the morning to improve yourself.
          I recommend 3 types of books in your life. 1- for your soul, it’s light
          hearted, it’s about someones else possibly a fiction book or autobiography.
          2- a book that makes you a better person, an improvement book. 3- a book
          that makes you better at your job, a book that up skills you.
        </p>
        <p className="body">
          This is what I do, your morning routine will be different. Find what works
          for you, don’t be a fraud to change but also give different elements of
          your morning routine time to have a positive impact.
        </p>
        <p className="body">
          <strong>YouTube video examples:</strong><br />
            1.  <a href={"https://youtu.be/WYP_W49o1vQ"}>
                  Guided Morning Meditation (10m)
                </a><br />
            2.  <a href={"https://youtu.be/IBSGH837pvc"}>
                  “The Paradise Beach” Guided Meditation (10m)
                </a><br />
            3.  <a href={"https://youtu.be/861UDPivmFw"}>
                  Guided Meditation (10m)
                </a>
          </p>

          <p className="body">
          <strong>Useful apps to download:</strong><br />
            1.  <a href={"https://www.headspace.com"}>
                  Headspace
                </a><br />
            2.  <a href={"https://www.calm.com"}>
                  Calm
                </a>
          </p>
      </div>
    );


    const familyAndCommunityRelationships = (
      <div className="video-content">
        <p className="body">
          It’s time for some accountability and re-connecting with your why?
        </p>
        <p className="body">
          I hope by now you are starting to get the message from us, that you have a
          responsibility in life. A responsibility to yourself and the people around
          you.
        </p>
        <p className="body">
          We are not holding back on you this week!!!!
        </p>
        <h4 className="small-green-header">
          Action steps:
        </h4>
        <p className="body">
          Find an accountability partner. You can have yourself be your accountability
          partner. You can write down your goals and targets for the day and then check
          in at the end of the day and see where you were with regards to what you set
          out to achieve for the day/week/month or year. However, accountability partners
          can come in different forms. It may be a friend, your partner, an external 3rd
          party or it might just be a group of people or a community who keep you on your
          toes.
        </p>
        <p className="body">
          Educate yourself on where your responsibilities lay and your circle of
          influence, people are always watching, especially children.
        </p>
        <p className="body">
          Discover what your why is? The reason you do what you do. Is to for money,
          your family, experiences, future plans. Remember this is YOUR reason,
          nobody else.
        </p>
        <p className="body">
          Once you have discovered your why? Spend time every morning reconnecting with
          your why.
        </p>

      </div>
    );

    const careerAndWorkLifeBalance = (
      <div className="video-content">
        <p className="body">
          We are continuing this week with “why do you go to work?” theme.
        </p>
        <p className="body">
          It’s easy to get pulled into the routine of going to work every day, not asking
          any questions and just going with the flow.
        </p>
        <p className="body">
          I want you to start thinking about and evaluating your current role and how it
          sits with you.
        </p>
        <h4 className="small-green-header">
          Tasks:
        </h4>
        <p className="body">
          Think about the statistic that says 7/10 people don’t like their job, where do you
          sit in that stat?
        </p>
        <p className="body">
          Whats the cost of your job? — Think financial return versus time spent at work and
          how it makes you feel. Write down your answers.
        </p>
        <p className="body">
          What are the health costs of your job — how does it physically make you feel?
        </p>
        <p className="body">
          What are the mental health implications of your job? Are you less stressed or more
          stressed when you get home?
        </p>
        <p className="body">
          How does your job affect you and your relationship with your family and friends?
        </p>
        <h4 className="small-green-header">
          Action Steps
        </h4>
        <p className="body">
          Once you have answered the questions, I then want you to share the questions with a
          close member of your family or your partner. Check and see if your answers are
          consistent throughout.
        </p>
        <p className="body">
          Read and understand your responses and see where you can begin to make changes with
          your approach to work and impact your work has on you!
        </p>
      </div>
    );

    const wealthAndFinancialWellbeing = (
      <div className="video-body">
        <p className="body">
          Did you take the action, did you do what was asked of you?
        </p>
        <p className="body">
          Today’s video is designed solely to reiterate the previous two videos and
          make sure you have taken action.
        </p>
        <h4 className="small-green-header">
          Action Steps
        </h4>
        <p className="body">
          Budget review completed
        </p>
        <p className="body">
          Results from budget used to determine an amount of money that you can save per month.
        </p>
        <p className="body">
          Start small with your amount, it is better to start small than not at all.
        </p>
        <p className="body">
          Set the account up for saving into. Set the date for withdrawal as the first day
          after the money has been paid into the account.
        </p>
        <p className="body">
          Review your savings every month. Can you afford to increase your savings a little bit
          at a time each month?
        </p>
        <p className="body">
          Always be looking to move forward with your savings but not until you can afford to.
          Moving back should not be an option.
        </p>
        <p className="body">
          <strong>Go!</strong>
        </p>
      </div>
    );

    const selfActualization = (
      <div className="video-content">
        <p className="body">
          We started to think about working on ourselves last week, that theme
          continues this week with the introduction of self-development.
        </p>
        <p className="body">
          In order to truly develop as an individual, we need to embrace the
          understanding that we can control different elements of our lives.
        </p>
        <h4 className="small-green-header">
          Three Areas To Work On:
        </h4>
        <p className="body">
          <strong>Meditation time</strong> — if you have not meditated before,
          I would recommend any form of guided meditation. I work using youtube
          or an app called headspace. 10 minutes of guided meditation will set me
          up for an awesome day. Don’t knock it until you have tried it. (See
          links below) Meditation is a window…
        </p>
        <p className="body">
          <blockquote>“Meditation is a means of transforming the mind. Buddhist
          meditation practices are techniques that encourage and develop
          concentration, clarity, emotional positivity, and a calm seeing of the
          true nature of things. By engaging with a particular meditation practice
          you learn the patterns and habits of your mind, and the practice offers
          a means to cultivate new, more positive ways of being. With regular
          work and patience, these nourishing, focused states of mind can deepen
          into profoundly peaceful and energised states of mind. Such experiences
          can have a transformative effect and can lead to a new understanding
          of life.”</blockquote><cite>— the Buddhist centre: Buddhism for today</cite>
        </p>
        <p className="body">
          <strong>Reflection</strong> — in your journal or your workbook make a list
          of your own strengths and weakness as a person. This will allow for you
          to identify areas you feel you need to work on.
        </p>
        <p className="body">
          <strong>Seek an appraisal</strong> — continuing on from the previous task, I
          want you to speak to a friend a colleague maybe your partner (the important
          factor of this discussion is that the information and feedback you are going
          to get is honest, not just what you want to hear, it needs to be what you need
          to hear).
        </p>
        <p className="body">
          Take the information you now have and begin to think about how and where you
          can begin to factor change into your life. But remember it starts with your
          morning routine.
        </p>
        <p className="body">
          <strong>YouTube video examples:</strong><br />
            1.  <a href={"https://youtu.be/WYP_W49o1vQ"}>
                  Guided Morning Meditation (10m)
                </a><br />
            2.  <a href={"https://youtu.be/IBSGH837pvc"}>
                  “The Paradise Beach” Guided Meditation (10m)
                </a><br />
            3.  <a href={"https://youtu.be/861UDPivmFw"}>
                  Guided Meditation (10m)
                </a>
        </p>

        <p className="body">
          <strong>Useful apps to download:</strong><br />
            1.  <a href={"https://www.headspace.com"}>
                  Headspace
                </a><br />
            2.  <a href={"https://www.calm.com"}>
                  Calm
                </a>
        </p>
      </div>
    );

    const videos = Immutable.fromJS({
      "Health & Fitness": {
        "videoLink": "FxvKB24n_lE",
        "class": "purple",
        "info": healthAndFitness
      },
      "Mental Health and Wellbeing": {
        "videoLink": "0iu3odz27YI",
        "class": "yellow",
        "info": mentalHealthAndWellbeing
      },
      "Family & Community Relationships": {
        "videoLink": "ri9AdrH1vMs",
        "class": "pink",
        "info": familyAndCommunityRelationships
      },
      "Career & Work/Life Balance": {
        "videoLink": "gd0TGQ0w0vI",
        "class": "orange",
        "info": careerAndWorkLifeBalance
      },
      "Wealth & Financial Wellbeing": {
        "videoLink": "68uK_hejHzc",
        "class": "red",
        "info": wealthAndFinancialWellbeing
      },
      "Self-Actualization": {
        "videoLink": "G6nSjv8WtKQ",
        "class": "blue",
        "info": selfActualization
      }
    });

    const title = "MYP Boost! — Week Three";

    //appears before videos on the pages
    const firstSection = (
      <div className="first-section">
        <p className="body">
          Week 3 is upon us and this week you will start to notice, feel and
          experience the positive changes happening around you. Celebrate the
          wins and move on from the setbacks!
        </p>
        <p className="body">
          This week we are stepping up our expectations of you, and we expect
          you to respond in kind by stepping up your expectations of those around you.
          Raise your standards, everywhere. From the people you hang out with to the
          food that you eat. If it’s not of benefit to you, remove it from your life.
          Simple!
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
