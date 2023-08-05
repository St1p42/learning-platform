import openai


def getToeflTest():
    openai.api_key = "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"

    passage_response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
                "content": "You are a skilled AI capable of generating a detailed, academic passage between 500-700 words within the realms of humanities, social sciences, life sciences, or physical sciences. Provide the title and the passage itself"
            },
            {
                "role": "user",
                "content": "Please generate an academic passage for me."
            },
        ],
        temperature=1,
        max_tokens=3500
    )

    passage = passage_response['choices'][0]['message']['content']

    print("Generated Passage: ", passage)

    # Generate the questions and answers
    qa_response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
                "content": "You are a skilled AI capable of generating TOEFL style comprehension questions and answers from a given passage."
            },
            {
                "role": "user",
                "content": f"Based on this passage, generate 10 reading comprehension questions with 4 answer choices each, and also provide an 'Answer Key'.\n\n{passage}"
            },
        ],
        temperature=0.7,
        max_tokens=3000
    )

    print("Questions, Answers, and Answer Key: ", qa_response['choices'][0]['message']['content'])


getToeflTest()
