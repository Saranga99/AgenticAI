"""
Simple try of the agent.

@dev You need to add OPENAI_API_KEY to your environment variables.
"""

import os
import sys

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import asyncio

from langchain_openai import ChatOpenAI

from browser_use import Agent

llm = ChatOpenAI(model='gpt-4o')
agent = Agent(
	task='Go to https://online.uom.lk/my/ and login usename:258248E and password is Saranga@1234,	and go inside advanced databased module and do the this quiz "PopQuiz_4.2 (From Lect 4)"',
	llm=llm,
)


async def main():
	await agent.run(max_steps=5)
	agent.create_history_gif()


asyncio.run(main())