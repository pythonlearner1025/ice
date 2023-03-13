import os
import openai
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv('API_KEY')

if __name__ == '__main__':
    print(os.getenv('API_KEY'))