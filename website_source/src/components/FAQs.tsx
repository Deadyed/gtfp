import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Can I get a quote over the phone?",
      answer: "Yes! In many situations, one of our estimators can provide a quote over the phone. Call us at 647-256-3473. We will do our best to provide a verbal quotation based on the information we have at the time. In some situations an on-site visit may be required/recommended in order to provide the most competitive, accurate price possible. Our initial site visit is FREE and our quotes are provided with no obligation!"
    },
    {
      question: "Why do I need fire sprinklers installed?",
      answer: "Fire sprinklers are the most effective method of protecting lives and property. Sprinkler systems are now recognized as being so effective they are being made mandatory in many situations. Sprinklers may be required to be installed by building codes, or may be recommended by insurance companies to reduce potential property losses or business interruption. Sprinklers are a valuable investment."
    },
    {
      question: "Is there a legal requirement to update a building's fire alarm bells or sprinklers?",
      answer: "There is a legal requirement in the Canadian National Fire Code (emulated in Provincial and Territorial Fire Codes as well) to MAINTAIN a fire alarm and sprinkler system in an operational condition. Part of this requirement mandates periodic testing in accordance with the Annual Fire Alarm Testing Standard (CAN/ULC-S536) as well as sprinkler testing outlined in NFPA 25."
    },
    {
      question: "Will a fire alarm device that's indicating trouble on the common control still work?",
      answer: "If a circuit or device trouble is indicated on the common control, then there is a very real possibility that the devices in that zone (or circuit) may not be functioning. If an actual device trouble is present, the display may also indicate what's wrong with that device. All fire alarm system trouble signals should be investigated and rectified by a trained technician!"
    },
    {
      question: "What's the maximum time a fire alarm or sprinkler system can be out of service without evacuating the building or providing a fire watch?",
      answer: "If your fire alarm or sprinkler system is out of service (for any reason), a fire watch must be instituted IMMEDIATELY. A non-functional fire alarm system won't require you to evacuate your building unless there's actually been a fire that has compromised the fire alarm or sprinkler system (in which case the local Jurisdictional Authority may impose some additional requirements before allowing you to reoccupy the building). An approved and properly monitored fire watch is designed to address a temporary interruption of the building's life safety systems."
    },
    {
      question: "I have been issued a Notice to Comply. How long do I have to get it fixed?",
      answer: "The Ontario Fire Code is Provincial legislation that enables a Municipality to ensure all buildings are maintained to an acceptable standard. The Code is a Regulation under the Fire Protection and Prevention Act and serves as a maintenance document to the Ontario Building Code. If you have been issued a report citing a violation, the reference to the code would have come from the Ontario Fire Code. A Notice to Comply to any fire or life safety equipment means that its ability to function correctly IN AN EMERGENCY is impaired to the point where it is not capable of operating, or it will operate at a significantly reduced capacity, or its operation could present a hazard to the building's occupants. It must be repaired IMMEDIATELY. GTFP is familiar with the Ontario Fire Code and can help you make sense of the notice you have been given."
    }
  ];

  return (
    <section id="faqs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We have answers! Greater Toronto Fire Protection is pleased to be available 24-hours to answer any question you may have.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-4 bg-white">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Don't see your question here? Contact us directly!
          </p>
          <a 
            href="#contact" 
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md inline-block transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
