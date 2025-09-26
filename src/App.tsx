import React from 'react';
import Header from './components/Header';
import ContentBlock from './components/ContentBlock';
import CodeEditor from './components/CodeEditor';
import MediaBlock from './components/MediaBlock';
import AIWordTooltip from './components/AIWordTooltip';
import AILearningAssistant from './components/AILearningAssistant';
import PDFPageSelector from './components/PDFPageSelector';
import AIImageGenerator from './components/AIImageGenerator';
import SmartQuizGenerator from './components/SmartQuizGenerator';
import ProgressTracker from './components/ProgressTracker';

function App() {
  const pythonCode = `# Python Introduction - Hello World
def greet(name):
    """
    A simple function to greet someone
    """
    message = f"Hello, {name}! Welcome to Python programming."
    return message

# Main execution
if __name__ == "__main__":
    user_name = "Student"
    greeting = greet(user_name)
    print(greeting)
    print("Python is a powerful and versatile programming language!")`;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Heading */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Python Introduction</h1>
              <p className="text-gray-600">Aggregated study guide from multiple sources</p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">3 PDFs</span>
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">2 Videos</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">5 Images</span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">4 Code Blocks</span>
            </div>
          </div>
        </div>

        {/* Content Blocks */}
        <div className="space-y-6">
          {/* Introduction Block */}
          <ContentBlock title="What is Python?">
            <p className="text-gray-700 leading-relaxed mb-4">
              <AIWordTooltip 
                word="Python" 
                definition="A high-level, interpreted programming language known for its simplicity and readability."
                context="Python is widely used in web development, data science, artificial intelligence, and automation due to its extensive libraries and easy-to-learn syntax."
              >
                Python
              </AIWordTooltip> is a high-level, <AIWordTooltip 
                word="interpreted" 
                definition="A programming language that executes code directly without prior compilation to machine code."
                context="Interpreted languages like Python allow for faster development cycles as code can be run immediately without a separate compilation step."
              >
                interpreted
              </AIWordTooltip> programming language known for its simplicity and readability. 
              Created by Guido van Rossum and first released in 1991, Python has become one of the most popular 
              programming languages in the world.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Easy to learn and use</li>
              <li>Extensive standard library</li>
              <li>Cross-platform compatibility</li>
              <li>Strong community support</li>
              <li>Versatile applications (web, data science, AI, automation)</li>
            </ul>
          </ContentBlock>

          {/* PDF Page Selection Demo */}
          <ContentBlock title="Import Specific PDF Pages">
            <p className="text-gray-700 mb-4">
              Select exactly which pages you need from your textbooks and documents. 
              No more importing entire PDFs - just get the content that matters for your current topic.
            </p>
            <PDFPageSelector
              pdfName="Python Programming Fundamentals.pdf"
              totalPages={156}
              onPagesSelected={(pages) => console.log('Selected pages:', pages)}
            />
          </ContentBlock>

          {/* AI Image Generation Demo */}
          <ContentBlock title="AI-Generated Concept Images">
            <p className="text-gray-700 mb-4">
              Can't find the right diagram or illustration? Let our AI create custom images 
              that explain complex concepts visually, tailored to your specific learning needs.
            </p>
            <AIImageGenerator
              concept="Python Functions"
              onImageGenerated={(url) => console.log('Generated image:', url)}
            />
          </ContentBlock>

          {/* Media Content Blocks */}
          <div className="grid md:grid-cols-2 gap-6">
            <MediaBlock
              type="video"
              title="Python Functions Explained"
              content={{ url: "https://youtube.com/watch?v=example", duration: "12:34" }}
            />
            <MediaBlock
              type="pdf"
              title="Python Basics Textbook"
              content={{ pages: "45-52", source: "Learning Python 5th Edition" }}
            />
          </div>

          <MediaBlock
            type="image"
            title="Python Syntax Visualization"
            content={{ 
              url: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
              source: "AI Generated",
              description: "Visual representation of Python syntax concepts"
            }}
          />

          {/* Key Features Block */}
          <ContentBlock title="Key Features">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Simple Syntax</h4>
                <p className="text-blue-800 text-sm">
                  Python's <AIWordTooltip 
                    word="syntax" 
                    definition="The set of rules that defines valid constructs in a programming language."
                    context="Python's syntax emphasizes readability and simplicity, using indentation to define code blocks instead of braces."
                  >
                    syntax
                  </AIWordTooltip> is clean and easy to understand, making it perfect for beginners.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Interpreted Language</h4>
                <p className="text-green-800 text-sm">No compilation step needed - run your code directly.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">Object-Oriented</h4>
                <p className="text-purple-800 text-sm">
                  Supports <AIWordTooltip 
                    word="object-oriented programming" 
                    definition="A programming paradigm based on the concept of objects, which contain data and code."
                    context="OOP in Python allows you to create classes and objects, enabling code reusability and better organization of complex programs."
                  >
                    object-oriented programming
                  </AIWordTooltip> paradigms.
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-2">Dynamic Typing</h4>
                <p className="text-orange-800 text-sm">Variables don't need explicit type declarations.</p>
              </div>
            </div>
          </ContentBlock>

          {/* Code Example Block */}
          <ContentBlock title="Your First Python Program">
            <p className="text-gray-700 mb-4">
              Let's start with a simple "Hello World" program. This example demonstrates basic Python syntax, 
              <AIWordTooltip 
                word="function definition" 
                definition="The process of creating a reusable block of code that performs a specific task."
                context="In Python, functions are defined using the 'def' keyword followed by the function name and parameters in parentheses."
              >
                function definition
              </AIWordTooltip>, and string formatting. Click the "Run" button to execute the code and see the output.
            </p>
            <CodeEditor code={pythonCode} language="python" />
          </ContentBlock>

          {/* Learning Path Block */}
          <ContentBlock title="What's Next?">
            <p className="text-gray-700 mb-4">
              Now that you've seen your first Python program, here's what we'll cover in upcoming lessons:
            </p>
            <div className="space-y-3">
              {[
                { topic: 'Variables and Data Types', progress: 100 },
                { topic: 'Control Structures (if/else, loops)', progress: 80 },
                { topic: 'Functions and Modules', progress: 60 },
                { topic: 'Object-Oriented Programming', progress: 30 },
                { topic: 'File Handling and Exceptions', progress: 0 }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <span className="font-medium text-gray-700">{item.topic}</span>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-gray-500">{item.progress}%</span>
                    <div className="bg-gray-200 rounded-full h-2 w-24">
                      <div
                        className="bg-blue-600 h-full rounded-full transition-all duration-300"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ContentBlock>

          {/* Smart Quiz */}
          <ContentBlock title="AI-Generated Practice Quiz">
            <p className="text-gray-700 mb-4">
              Test your understanding with personalized quizzes generated from your aggregated notes. 
              Our AI analyzes your content and creates relevant questions to reinforce your learning.
            </p>
            <SmartQuizGenerator />
          </ContentBlock>

          {/* Progress Tracking */}
          <ContentBlock title="Comprehensive Progress Tracking">
            <p className="text-gray-700 mb-4">
              Monitor your learning journey with detailed analytics. Track topic mastery, 
              study streaks, content engagement, and get insights into your learning patterns.
            </p>
            <ProgressTracker />
          </ContentBlock>

          {/* Practice Exercise Block */}
          <ContentBlock title="Practice Exercise">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">Try it yourself!</h3>
                  <p className="mt-1 text-sm text-yellow-700">
                    Modify the code above to greet yourself with your own name. 
                    Try changing the message or adding more print statements.
                  </p>
                </div>
              </div>
            </div>
          </ContentBlock>
        </div>
      </main>
      
      {/* AI Learning Assistant */}
      <AILearningAssistant />
    </div>
  );
}

export default App;