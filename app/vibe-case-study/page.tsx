"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function VibeCaseStudy() {
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
              Building Vibe: A User-Centric Approach to Social Product Development
            </h1>
            <p className="text-xl text-gray-600">
              A comprehensive case study on product management methodologies applied to friendship app development
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
                Vibe represents a comprehensive product development journey that demonstrates systematic application of product management principles to solve real user problems in the friendship app market. Through extensive market research, hypothesis-driven strategy development, and iterative learning, this project showcases the complete product lifecycle from initial concept to go-to-market strategy. The case study highlights key PM skills including market analysis, user research, strategic pivoting, and data-driven decision making in building a differentiated social product.
              </p>
            </div>

            <h2 className="section-header">1. Market Research & Problem Definition</h2>
            
            <h3>Challenge Identification</h3>
            <p><strong>Initial Market Analysis:</strong> Identified significant gaps in the friendship app market through competitive analysis and user research.</p>
            
            <div className="bg-green-50 p-4 rounded-lg my-4">
              <p><strong>Key Findings:</strong></p>
              <ul>
                <li><strong>Market validation:</strong> Large addressable market with existing demand (mainstream apps like Bumble BFF)</li>
                <li><strong>User pain points:</strong> Systematic flakiness, ghosting, and superficial matching through swiping interfaces</li>
                <li><strong>Product insight:</strong> Swiping mechanics encourage close-mindedness and "grass is greener" mentality</li>
              </ul>
            </div>

            <h3>PM Skills Demonstrated</h3>
            <ul>
              <li>Market research and competitive landscape analysis</li>
              <li>Problem identification and validation</li>
              <li>User pain point synthesis</li>
              <li>Market opportunity assessment</li>
            </ul>

            <h2 className="section-header">2. Hypothesis-Driven Product Strategy</h2>
            
            <h3>Initial Product Hypothesis</h3>
            <p><strong>Core Hypothesis:</strong> Group-based matching with compatibility algorithms and single-focus engagement would solve core user problems in the friendship app space.</p>
            
            <h3>Validation Approach</h3>
            <div className="bg-yellow-50 p-4 rounded-lg my-4">
              <p><strong>Discovery Process:</strong></p>
              <ul>
                <li>Discovered We3 as precedent - validated group matching concept through user reviews analysis</li>
                <li><strong>Key insight:</strong> Good concept, poor execution around active user matching created opportunity</li>
                <li><strong>Strategic decision:</strong> Focus on guaranteed matches and curated groups vs. user-generated content</li>
              </ul>
            </div>

            <h3>PM Skills Demonstrated</h3>
            <ul>
              <li>Hypothesis formation and testing</li>
              <li>Validation methodology development</li>
              <li>Strategic positioning against competitors</li>
              <li>Evidence-based decision making</li>
            </ul>

            <h2 className="section-header">3. Continuous Learning & Pivot Strategy</h2>
            
            <h3>Discovery Process</h3>
            <p><strong>Challenge:</strong> User interviews revealed additional competitors initially missed in research.</p>
            
            <h3>Strategic Response Framework</h3>
            <div className="bg-blue-50 p-4 rounded-lg my-4">
              <p><strong>Market Assessment:</strong></p>
              <ul>
                <li>Competitors were geographically limited with small user bases</li>
                <li><strong>Strategic decision:</strong> Proceed with differentiated approach rather than major pivot</li>
                <li><strong>Reasoning:</strong> Market large enough for multiple players, iteration would reveal key differentiators</li>
                <li><strong>Learning mindset:</strong> Planned to incorporate successful competitor features through user feedback</li>
              </ul>
            </div>

            <h3>PM Skills Demonstrated</h3>
            <ul>
              <li>Adaptability and strategic thinking</li>
              <li>Competitive intelligence gathering</li>
              <li>Risk assessment and mitigation</li>
              <li>Continuous learning integration</li>
            </ul>

            <h2 className="section-header">4. User-Centric Feature Development</h2>
            
            <h3>Matching Criteria Definition</h3>
            <p><strong>Approach:</strong> Developed compatibility framework based on personal experience and user research insights.</p>
            
            <h3>Product Evolution Strategy</h3>
            <div className="bg-green-50 p-4 rounded-lg my-4">
              <p><strong>Initial MVP:</strong> Core matching functionality only</p>
              <p><strong>Iteration insight:</strong> Recognized need for immediate user value beyond matching</p>
              <ul>
                <li>Immediate user value increases likelihood of excitement</li>
                <li>Word-of-mouth spreading essential for social apps</li>
                <li><strong>Feature expansion:</strong> Added new feature requirements to meet this need</li>
              </ul>
            </div>

            <h3>PM Skills Demonstrated</h3>
            <ul>
              <li>Feature prioritization and roadmapping</li>
              <li>User value creation focus</li>
              <li>Growth thinking and viral mechanics</li>
              <li>MVP scoping and iteration planning</li>
            </ul>

            <h2 className="section-header">5. Go-to-Market Strategy Development</h2>
            
            <h3>Geographic Focus Decision</h3>
            <p><strong>Strategic Pivot:</strong> Narrowed from region-based launch to college-based launch</p>
            
            <h3>Target Market Analysis</h3>
            <div className="bg-yellow-50 p-4 rounded-lg my-4">
              <p><strong>Target Market Pivot:</strong> Strategically shifted from general audience to college students based on:</p>
              <ul>
                <li><strong>Superior user acquisition channels:</strong> Partnerships with groups and people on campus</li>
                <li><strong>Product-market fit factors:</strong> High social density, friend-seeking behavior, app adoption willingness</li>
                <li><strong>Timing strategy:</strong> Coordinated launch with academic calendar for maximum impact</li>
              </ul>
            </div>

            <h3>Current GTM Development</h3>
            <p><strong>Strategic Prioritization:</strong> Prioritizing go-to-market over product development due to seasonal timing constraints and AI-accelerated development capabilities.</p>

            <h3>PM Skills Demonstrated</h3>
            <ul>
              <li>Market segmentation and targeting</li>
              <li>Channel strategy development</li>
              <li>Timing optimization</li>
              <li>Resource prioritization and allocation</li>
            </ul>

            <h2 className="section-header">6. Learning Framework & Next Steps</h2>
            
            <h3>Success Metrics Framework</h3>
            <div className="bg-blue-50 p-4 rounded-lg my-4">
              <p><strong>Success Metrics Under Development:</strong></p>
              <ul>
                <li>User acquisition and sign-up conversion</li>
                <li>Group engagement and retention rates</li>
                <li>Real-world meetup conversion (core value realization)</li>
              </ul>
            </div>

            <h3>Iterative Approach</h3>
            <p><strong>Methodology:</strong> Committed to build-measure-learn cycles rather than predetermined roadmap, allowing user feedback to drive product decisions.</p>

            <h3>PM Skills Demonstrated</h3>
            <ul>
              <li>Metrics thinking and KPI development</li>
              <li>Agile methodology application</li>
              <li>User-driven development approach</li>
              <li>Continuous improvement mindset</li>
            </ul>

            <h2 className="section-header">7. Key PM Competencies Demonstrated</h2>
            
            <h3>Strategic Thinking</h3>
            <ul>
              <li>Market opportunity assessment and competitive positioning</li>
              <li>Hypothesis-driven product development</li>
              <li>Strategic pivoting based on user insights</li>
              <li>Go-to-market strategy optimization</li>
            </ul>

            <h3>User-Centric Approach</h3>
            <ul>
              <li>Comprehensive user research and problem validation</li>
              <li>Continuous user feedback integration</li>
              <li>Feature development based on real user needs</li>
              <li>Value proposition refinement through user insights</li>
            </ul>

            <h3>Execution Excellence</h3>
            <ul>
              <li>Systematic approach to product development lifecycle</li>
              <li>Resource prioritization and timing optimization</li>
              <li>Metrics-driven decision making</li>
              <li>Iterative learning and adaptation</li>
            </ul>

            <h2 className="section-header">8. Learnings & Future Applications</h2>
            
            <h3>Key Insights Gained</h3>
            <div className="bg-green-50 p-4 rounded-lg my-4">
              <p><strong>Product Development Insights:</strong></p>
              <ul>
                <li>Market research must go beyond surface-level analysis to uncover real user pain points</li>
                <li>Hypothesis-driven development reduces risk and accelerates learning</li>
                <li>Go-to-market timing can be as critical as product features</li>
                <li>User feedback loops must be built into the product development process from day one</li>
              </ul>
            </div>

            <h3>Methodology Refinements</h3>
            <p><strong>Future Improvements:</strong></p>
            <ul>
              <li>Earlier integration of quantitative and qualitative research methods</li>
              <li>More structured competitor analysis framework</li>
              <li>Systematic documentation of decision rationales</li>
              <li>Clearer success criteria definition at each stage</li>
            </ul>

            <h3>Scalable PM Practices</h3>
            <ul>
              <li>Build-measure-learn cycle implementation</li>
              <li>User research integration into product roadmap</li>
              <li>Cross-functional alignment on success metrics</li>
              <li>Continuous market intelligence gathering</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="font-semibold mb-4">Project Status</h3>
              <p className="text-gray-700">
                Vibe is currently in the go-to-market preparation phase, with product development on hold while focusing on market entry strategy and user acquisition channels. The project demonstrates end-to-end product management capabilities from initial concept through market strategy development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}