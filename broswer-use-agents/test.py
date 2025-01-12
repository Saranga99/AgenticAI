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
	task='Go to https://www.patagonia.com/shop/mens, and scrape all products details for mens and return a json file.',
	llm=llm,
)


async def main():
	await agent.run(max_steps=3)
	agent.create_history_gif()


asyncio.run(main())