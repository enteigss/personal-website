"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
        
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Bay Discovery: A Case Study on Using Discovery to Validate a Community Platform Idea
            </h1>
            <p className="text-xl text-gray-600">
              A detailed look at the development process and learnings
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <style jsx>{`
              ul {
                list-style-type: disc !important;
                margin-left: 1.5rem !important;
                padding-left: 0 !important;
              }
              li {
                margin-left: 0 !important;
              }
              .section-header {
                font-size: 2rem !important;
                font-weight: 700 !important;
                margin-top: 3rem !important;
                margin-bottom: 1.5rem !important;
                color: #1f2937 !important;
              }
            `}</style>
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-lg font-semibold text-blue-900 mb-2">Executive Summary</h2>
              <p className="text-blue-800">
                Identified a gap in the market for local-first online communities. Initial research with 20+ potential users revealed that the primary user pain point was not the lack of a platform, but the difficulty in discovering existing local Discord servers. I pivoted the strategy to focus on this discovery problem, designing and launching an MVP discovery platform as a "wedge" to validate the market. The MVP launched in one day, attracted 179 unique visitors in the first week, and achieved a 10.6% click-through rate to listed servers, validating user demand for a dedicated local community discovery solution.
              </p>
            </div>

            <h2 className="section-header">1. Original Problem Hypothesis</h2>
            
            <h3>Initial Problem Statement</h3>
            <p><strong>Original Idea:</strong> An online community platform similar to discord, but built specifically for local community.</p>
            <p><strong>Problem:</strong> Dissatisfaction with social life; lacking in-person community and friends</p>
            
            <p><strong>Hypotheses:</strong></p>
            <ul>
              <li>There are people who feel more comfortable interacting with people in an online environment, but also want more in-person friends and community</li>
              <li>There are people who enjoy using online platforms to communicate and play games on who want more friends to play games with and hang out in-person</li>
              <li><strong>Opportunity:</strong> If these demographics are underserved there is potential in creating a platform to facilitate online communities based on location, bridging the gap between online and in-person interaction</li>
            </ul>

            <h3>Proposed Solution</h3>
            <p><strong>Initial Approach:</strong> Originally conceived a Discord-like platform optimized for local communities, with the belief that existing platforms weren't tailored for location-based interaction, IRL meetups, and creating an environment where the participants can easily make new friends</p>
            
            <p><strong>Features:</strong> Community discovery, meetup planning, voice communication, text channels</p>
            <p><strong>Main Differentiator:</strong> Discovery tailored for finding communities near you that match your criteria</p>
            <p><strong>Customer segments:</strong> College graduates, discord users/gamers, hobbyists (D&D players, hikers, etc.)</p>

            <h2 className="section-header">2. Research Process & Discovery</h2>
            
            <h3>Research Methodology</h3>
            <p><strong>How I Investigated the Problem:</strong></p>
            <p><strong>Research Methods:</strong></p>
            <ul>
              <li>Forum ethnography & sentiment analysis on subreddits such as r/bayarea and r/lonely</li>
              <li>Posting on Reddit</li>
              <li>Qualitative user outreach & screening</li>
              <li>Viewing discord servers</li>
              <li>Interviewing friends</li>
              <li>Surveys</li>
            </ul>
            <p>Conducted 20+ initial qualitative interviews via digital channels to understand user behaviors and pain points.</p>

            <h3>Key Research Activities</h3>
            <p><strong>User Interviews:</strong></p>
            <p>Conducted interviews with wide range of customer segments:</p>
            <ul>
              <li>Non-location based Discord users</li>
              <li>Location based Discord users</li>
              <li>Recent college graduates</li>
              <li>Bumble BFF users</li>
            </ul>

            <p><strong>Methods:</strong></p>
            <ul>
              <li>Browse subreddits: r/bayarea, r/lonely, r/LifeAfterSchool, r/discordapp</li>
              <li>Search for terms such as "discord", "friends", within subreddits</li>
              <li>Read through posts and message those of interest</li>
              <li>Join relevant discord servers</li>
            </ul>

            <p><strong>Market Research:</strong></p>
            <ul>
              <li><strong>Search Volume Analysis:</strong> Found ~25k monthly searches for local online community</li>
              <li><strong>Competitive Research:</strong> Identified current alternatives:
                <ul>
                  <li><strong>Discord:</strong> Weak location based discovery</li>
                  <li><strong>Facebook groups:</strong> Convoluted by other posts and primarily used by older audience, outdated interface</li>
                  <li><strong>Meetup:</strong> Purely used for coordinating meetups, cannot be used as on online hub</li>
                  <li><strong>Geneva:</strong> Very small, not many people know about it, communities are private and can be hard to get into</li>
                </ul>
              </li>
            </ul>

            <h3>Critical Insights Discovered</h3>
            <p><strong>What the Research Actually Revealed:</strong></p>
            
            <div className="bg-green-50 p-4 rounded-lg my-4">
              <p><strong>Finding #1:</strong> Interest in but no easy way to find local niche interest based groups</p>
              <p><strong>Evidence:</strong></p>
              <ul>
                <li>Posts on SF Bay Area discord asking things like "where can I find bay area trans discord" or "where can I find bay area hardware discord"</li>
                <li>Reddit threads full of people asking for a specific discord, for example a thread of many people asking for the discord link to a bay area hiking group</li>
                <li>Expired links to discord servers</li>
                <li>Interviewee telling me they would be interested in a local CSGO group if they knew where to find it</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg my-4">
              <p><strong>Finding #2:</strong> Wide range of reasons people go to discord, but some go because they feel more comfortable and find it easier to find those who share interests, and some who want to transition more to in-person, confirming hypothesis</p>
              <p><strong>Evidence & Quotes:</strong></p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                "I have some social anxiety that I'm trying to work through but I also love to meet new people"
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                "[Discord] just gives me a way to feel someone out before I talk to them I guess"
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                "i [tried to shift from online to in person] but still isn't as smoothly as online feels and honestly irl its kind of hard to find ppl w the same interests like gaming i feel like online u find ppl w same interests easier than irl thats why u can bond quicker"
              </blockquote>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg my-4">
              <p><strong>The Pivot Moment:</strong> I realized that people do value online communities for the reason I thought they would, but may already be satisfied with what is already available just on discord. However, the biggest gap that I noticed discord did not provide was the ability to easily find such communities. I realized I could pursue discovery, and even use it as a wedge if I did want to create my own platform.</p>
            </div>

            <h2 className="section-header">3. Strategic Decision: Problem Prioritization</h2>
            
            <h3>Problem Comparison Framework</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Factor</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Original Problem (Platform Quality)</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Discovered Problem (Discovery)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Market Size</td>
                    <td className="border border-gray-300 px-4 py-2">High</td>
                    <td className="border border-gray-300 px-4 py-2">High</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">User Pain Level</td>
                    <td className="border border-gray-300 px-4 py-2">Low</td>
                    <td className="border border-gray-300 px-4 py-2">Medium/High</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Solution Complexity</td>
                    <td className="border border-gray-300 px-4 py-2">High</td>
                    <td className="border border-gray-300 px-4 py-2">Low/Medium</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Time to Validate</td>
                    <td className="border border-gray-300 px-4 py-2">High</td>
                    <td className="border border-gray-300 px-4 py-2">Low</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Strategic Rationale</h3>
            <p><strong>The "Wedge" Strategy Decision:</strong></p>
            <p><strong>Reasoning:</strong> Discovery seemed like a bigger issue, would be easier to solve and validate, and was something anyone looking for a community would want meaning the market was big</p>
            <p>This approach de-risked the project by focusing on validating the most critical user assumption (the need for local community) with the lowest possible engineering investment.</p>
            <p><strong>Transition:</strong> I could build a discovery platform alongside performing more research, trying to identify pain points with existing platforms other than discovery, and could later use discovery platform as a wedge for my own specialized platform, or make the discovery the entire platform</p>
            <p><strong>Risk mitigated:</strong> Time risk of building a platform that no one wants</p>

            <h2 className="section-header">4. Revised Product Strategy</h2>
            
            <h3>New Product Approach</h3>
            <p><strong>Discovery-First Strategy:</strong></p>
            
            <p><strong>Phase 1: Discovery Platform</strong></p>
            <p>Core features (MVP):</p>
            <ul>
              <li>A curated Directory of Bay Area Discord servers and Facebook groups</li>
              <li>Each server given a brief description, and relevant information including size and activity level</li>
              <li>Organization of directory to make it easy to navigate</li>
              <li>Ability to submit community to be on the directory</li>
              <li><strong>Success metrics:</strong> 
                <ul>
                  <li><strong>Conversion Rate (Server Clicks / Visitors):</strong> To measure the quality of our curated list and validate that we are showing users relevant communities. A high rate indicates we are solving the discovery problem effectively.</li>
                  <li><strong>Traffic Volume:</strong> To gauge the overall size of the addressable market and interest in the problem space.</li>
                  <li><strong>Server Submissions:</strong> To validate that we are providing value to community owners, creating a flywheel for content and growth.</li>
                </ul>
              </li>
            </ul>

            <p><strong>Phase 2: Platform Transition</strong></p>
            <p>How discovery insights will inform platform features:</p>
            <ul>
              <li>Search query analysis can identify categories and unmet needs</li>
              <li>Behavior analytics will reveal which community types have highest engagement/join rates</li>
              <li>Common user questions during discovery become automated onboarding flows</li>
              <li>Successful vs failed communities in discovery inform platform moderation/engagement tools</li>
            </ul>

            <h2 className="section-header">5. Implementation & Results</h2>
            
            <h3>MVP Development & Launch</h3>
            <p><strong>What I Built:</strong></p>
            <p>Simple discovery platform for Bay Area discord servers</p>
            <p><strong>Key features:</strong></p>
            <ul>
              <li>Servers divided into categories based on size and activity</li>
              <li>Search functionality</li>
              <li>Server tags</li>
              <li>Feedback and server submission</li>
            </ul>
            <p><strong>Launch timeline:</strong> I collected the servers over the period of my research, and created the platform in a single day using lovable</p>

            <h3>Results & Validation</h3>
            <div className="bg-blue-50 p-4 rounded-lg my-4">
              <p><strong>Quantitative Results (First Week):</strong></p>
              
              <p><strong>Traffic:</strong> Acquired 179 unique visitors through organic posts on Discord and Reddit.</p>
              
              <p><strong>Engagement:</strong> Achieved a 10.06% click-through rate, with 18 users clicking to join a community, signaling user intent</p>
              
              <p><strong>Growth:</strong> Received 11 new server submissions from the community, demonstrating value for server administrators and validating a potential growth loop.</p>
              
              <p><strong>User Behavior Insights:</strong></p>
              <ul>
                <li><strong>Most popular servers:</strong> Neurodiverse Universe, r/Berkley, NorCal Nerds</li>
                <li><strong>Biggest cities by users:</strong> San Jose, San Francisco</li>
              </ul>
              
              <p><strong>Qualitative Feedback:</strong></p>
              <ul>
                <li>People engaged with my post on San Francisco Bay Area discord channel</li>
                <li>Received positive feedback, and people thanking me</li>
              </ul>
            </div>

            <h3>Validation Outcomes</h3>
            <p><strong>What I Learned:</strong></p>
            <p>The initial results validated the core hypothesis: a significant user need for local community discovery exists. The 22.3% engagement rate is a strong signal of early product-market fit. The next challenge is to determine if this need is frequent enough to build a sustainable, standalone product around.</p>
            
            <p><strong>Next Steps:</strong> Based on the results, I would propose the following actions:</p>
            <ul>
              <li><strong>Deepen User Understanding:</strong> Conduct follow-up interviews with the users who clicked on the most popular servers (e.g., 'Neurodiverse Universe') to develop user personas and understand their specific motivations.</li>
              <li><strong>Test a Growth Hypothesis:</strong> The 'Server Submission' feature was a surprise success. I would run an A/B test on the homepage to see if making submissions more prominent increases the rate of new community acquisition, which is key to long-term value.</li>
            </ul>

            <h2 className="section-header">6. Skills Demonstrated & Learnings</h2>
            
            <h3>Skills Demonstrated</h3>
            <ul>
              <li>User Research & Synthesis</li>
              <li>Data-Driven Pivoting & Strategic Decision-Making</li>
              <li>Rapid Prototyping & MVP Execution</li>
              <li>Go-to-Market (GTM) & Launch</li>
              <li>Product Strategy & Roadmapping</li>
            </ul>

            <h3>Key Learnings</h3>
            <p><strong>What This Process Taught Me:</strong></p>
            <ul>
              <li>Product lifecycle from conception to launch</li>
              <li>How to use data to inform decisions</li>
              <li>How to search for and identify gaps in a market through user research</li>
            </ul>
            
            <p><strong>What I'd Do Differently:</strong></p>
            <ul>
              <li>Now that I have a greater understanding and familiarity with the process, I would provide myself greater structure</li>
              <li>Set stricter deadlines for myself ("do X by the end of the week" instead of "do X sometime in the next week or so")</li>
              <li>Set clearer goals (i.e. "interview 15 people" instead of "interview people")</li>
              <li>Document my process in a more organized manner</li>
              <li>Store interviews in documents</li>
              <li>Track key decisions and reasonings</li>
              <li>Set clear goals with metrics before making decisions (i.e. instead of "learn more about users through analytics" → "understand which servers users are interested so you can better decide who your target audience is")</li>
            </ul>

            <h2 className="section-header">Appendix: Supporting Materials</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Research Artifacts</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfs2AqLkTeabXzaNmzyOe6GnW8jufbrA-kP2-E0qm2XLRt2IA/viewform?usp=header" className="text-blue-600 hover:text-blue-800 underline">
                      Discord Discovery Survey
                    </a>
                  </li>
                  <li>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfs2AqLkTeabXzaNmzyOe6GnW8jufbrA-kP2-E0qm2XLRt2IA/viewform?usp=header" className="text-blue-600 hover:text-blue-800 underline">
                      Community Platform Survey
                    </a>
                  </li>
                  <li>
                    <a href="https://docs.google.com/document/d/1UogSvdYsQuh5vabts2OdalxRoZ6-SRVjp97scBlnfHI/edit?usp=sharing" className="text-blue-600 hover:text-blue-800 underline">
                      Example Interview
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Product</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://bay-discovery.com/" className="text-blue-600 hover:text-blue-800 underline">
                      Website
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}