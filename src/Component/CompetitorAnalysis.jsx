import { useState } from "react";
import AccordionItem from "./AccordionItem";

const CompetitorAnalysis = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordionData = [
    {
      title: "Competitor Analysis",
      content:
        "Knowing your competitors helps you understand where your business stands and what you can do better. This section will guide you in researching your competitors online, analyzing their websites, understanding their products or services, and observing their customer engagement strategies. You'll learn to spot market trends, identify gaps in their offerings, and use this information to position your business as the best choice in your industry. We'll break it down with examples, templates, and tools to help you get started confidently.",
    },
    {
      title: "Branding",
      content:
        "Branding goes beyond a logo—it's about creating a memorable identity for your business. Imagine your brand as the personality of your company. You'll learn how to define your mission, values, and unique story that connects with your audience. This section includes simple tips on choosing your brand colors, creating a logo, designing social media templates, and developing a consistent voice for your marketing materials. Whether you're starting fresh or improving an existing brand, we'll walk you through every step.",
    },
    {
      title: "Email Marketing",
      content:
        "Think of email marketing as a direct conversation with your customers. Even with no prior experience, we'll teach you how to write emails that grab attention, build trust, and inspire action. You'll understand how to create email lists, send newsletters, and track the performance of your campaigns. From automating responses to designing visually appealing templates, this section covers all the basics to make email marketing one of your most powerful tools.",
    },
    {
      title: "LinkedIn",
      content:
        "LinkedIn is where businesses and professionals connect. Whether you're looking for clients, partners, or collaborators, this platform is essential. You'll learn how to create a professional profile, find leads, and showcase your expertise. We'll explain how to engage with industry groups, post valuable content, and use LinkedIn ads to expand your reach. No matter your current skill level, our step-by-step tutorials make LinkedIn an accessible and effective tool for everyone.",
    },
    {
      title: "Google Ads",
      content:
        "Google Ads might seem complex, but it's just a way to help people find your business when they search online. This section explains how to create campaigns, choose keywords, and set a daily budget. You'll learn how to write clear, clickable ads and track how well they perform. Even if you've never run an ad before, our guides will teach you how to use Google Ads to reach the right customers efficiently and affordably.",
    },
    {
      title: "Meta Ads (Facebook & Instagram)",
      content:
        "Facebook and Instagram are where people spend most of their time online, and Meta Ads help you connect with them directly. You'll learn how to design ads with eye-catching images and messages that resonate with your audience. This section explains how to target specific groups based on their interests, track your results, and adjust campaigns for better performance. Even if you're new to social media marketing, this guide simplifies everything you need to know.",
    },
    {
      title: "Content Marketing",
      content:
        "Content marketing is about sharing information that's helpful, entertaining, or inspiring to your audience. This can be blog posts, videos, or social media posts. You'll learn how to plan a content calendar, write engaging captions, and create posts that encourage likes, shares, and comments. We'll also guide you on how to repurpose content across different platforms, saving time while keeping your audience engaged.",
    },
    {
      title: "Client Acquisition",
      content:
        "Getting clients can feel overwhelming, but it's easier with the right strategies. This section breaks it down step-by-step: how to identify potential clients, reach out with confidence, and follow up effectively. We'll provide templates for emails, call scripts, and social media messages, so you know exactly what to say. You'll also learn how to handle objections, negotiate deals, and close sales to grow your business steadily.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center">
          Marketing Strategies Guide
        </h1>
      </header>
      <div className="bg-white shadow-md rounded-lg">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openAccordion === index}
            toggleAccordion={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CompetitorAnalysis;
