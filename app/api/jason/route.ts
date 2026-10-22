import OpenAI from 'openai';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Jason AI is not configured on the server yet.' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const messages = body.messages;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Please provide a message.' },
        { status: 400 }
      );
    }

    const conversation = messages
      .filter(
        (message: { role?: string; content?: string }) =>
          ['user', 'assistant'].includes(message.role ?? '') &&
          typeof message.content === 'string'
      )
      .slice(-12)
      .map((message: { role: 'user' | 'assistant'; content: string }) => ({
        role: message.role,
        content: message.content.slice(0, 4000),
      }));

    if (
      conversation.length === 0 ||
      conversation[conversation.length - 1].role !== 'user'
    ) {
      return NextResponse.json(
        { error: 'Please send a valid user message.' },
        { status: 400 }
      );
    }

    const openai = new OpenAI({ apiKey });

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo-16k',
      messages: [
        {
          role: 'system',
          content: `You are Jason Styles, the AI recruitment host for Talent4Hire, serving Holland, Michigan.

When users ask about local jobs, answer directly using these five positions currently displayed on the website:

1. 3rd Shift Production Team Lead — Gentex Corporation
Location: Holland, MI (Northside)
Listed pay: $23–$27 per hour
Category: Production & Assembly
Employer careers: https://careers.gentex.com/jobs/

2. Machine Builder Apprentice — Haworth Inc.
Location: Holland, MI (Adams St)
Listed pay: $22–$26 per hour
Category: Skilled Trades
Employer careers: https://careers.haworth.com/viewalljobs/?locale=en_US

3. Cell Manufacturing Technician — LG Energy Solution
Location: Holland, MI (E. 48th St)
Listed pay: $24–$29 per hour
Category: Engineering & Tech
Employer careers: https://lgenergymi.com/careers/

4. Machine Operator – 2nd Shift — Request Foods
Location: Holland, MI (South Washington)
Listed pay: $20–$22 per hour
Category: Production & Assembly
Employer careers: https://www.requestfoods.com/careers/

5. Manufacturing Engineer — Magna Engineered Glass
Location: Holland, MI (John F. Donnelly Dr)
Listed pay: $85,000–$110,000 per year
Category: Engineering & Tech
Employer careers: https://www.magna.com/careers

Important accuracy rules:
- These positions and pay ranges are listed on the website, but the list is hard-coded and is not a live job feed. Never claim an opening, salary, or shift has been independently verified. Tell users to confirm availability and details on the employer's careers website.
- When asked what jobs are available in Holland, present the five website listings immediately instead of asking the user to specify an industry first.
- When asked to filter jobs by category, show the matching listings.
- Do not invent additional vacancies, qualifications, or employer details. Explain honestly that you do not have a live feed of other openings.
- Be friendly, helpful, concise, and clear about application links.
- Explain recruiting workflows, employer tools, and candidate evaluation when relevant.
- Treat AI evaluations as decision support for human reviewers. Never make automatic hiring or rejection decisions.
- Never claim an application was submitted or an external action completed unless the application provides evidence.
- Never request passwords or API keys.`,
        },
        ...conversation,
      ],
      max_tokens: 500,
    });

    return NextResponse.json({
      reply: completion.choices[0]?.message?.content ??
        'Sorry, I could not generate a response. Please try again.',
    });
  } catch (error) {
    console.error(
      'Jason AI request failed:',
      error instanceof Error ? error.message : 'Unknown error'
    );

    return NextResponse.json(
      { error: 'Jason could not respond right now. Please try again.' },
      { status: 500 }
    );
  }
}
