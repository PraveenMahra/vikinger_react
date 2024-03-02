/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { FaAngleDown } from "react-icons/fa";
import React from "react";
import "./faqQuestion.css";

function FAQSection() {
  const questions = [
    {
      question: "How do I create my Vikinger account?",
      answer:
        "This is an example text of what’s inside the accordion FAQs. Once you have the theme, you will be able to edit this test with your own via Elementor.",
    },
    {
      question: "Can anyone create an account?",
      answer:
        "This is an example text of what’s inside the accordion FAQs. Once you have the theme, you will be able to edit this test with your own via Elementor.",
    },
    {
      question: "Is the account free? Do I have to pay anything?",
      answer:
        "This is an example text of what’s inside the accordion FAQs. Once you have the theme, you will be able to edit this test with your own via Elementor.",
    },
    {
      question: "Can I invite friends to join Vikinger?",
      answer:
        "This is an example text of what’s inside the accordion FAQs. Once you have the theme, you will be able to edit this test with your own via Elementor.",
    },
    {
      question: "What are the credits for?",
      answer:
        "This is an example text of what’s inside the accordion FAQs. Once you have the theme, you will be able to edit this test with your own via Elementor.",
    },
    {
      question: "Can anyone post in the forums?",
      answer:
        "This is an example text of what’s inside the accordion FAQs. Once you have the theme, you will be able to edit this test with your own via Elementor.",
    },
  ];

  return (
    <section className="question-section container-first">
      <div>
        <p className="paragraph">VIKINGER COMMUNITY</p>
        <h2 className="heading question-section-heading">
          Frequently Asked Questions
        </h2>
        <p className="paragraph question-section-para">
          We know that some of you may have lots of questions about the
          community, how it works, and what you can and cannot do, so here’s a
          recopilation of the most common questions we get asked.
          <br />
          <br />
          If you have any further questions, just send us an email to
          vkgquestions@yourmail.com
        </p>
      </div>
      <div>
        <ul className="question-section-ul">
          {questions.map((item, index) => (
            <Question
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

function Question({ question, answer }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleQuestion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <li className="heading que-sec-ul" onClick={toggleQuestion}>
        <FaAngleDown
          className={`sec-question-icon ${isOpen ? "rotate" : ""}`}
        />
        {question}
      </li>
      <p className={`paragraph sec-question-li-para ${isOpen ? "" : "hidden"}`}>
        {answer}
      </p>
    </div>
  );
}

export default FAQSection;
