import os
import tweepy

def main():
    print("\U0001F512 Testing Twitter API credentials...")

    auth = tweepy.OAuth1UserHandler(
        os.getenv("TWITTER_API_KEY"),
        os.getenv("TWITTER_API_SECRET"),
        os.getenv("TWITTER_ACCESS_TOKEN"),
        os.getenv("TWITTER_ACCESS_SECRET")
    )

    api = tweepy.API(auth)

    try:
        user = api.verify_credentials()
        if user:
            print(f"\u2705 Auth successful. Logged in as: @{user.screen_name}")
        else:
            print("\u274C Auth failed. No user returned.")
    except Exception as e:
        print("\u274C Auth exception:", e)

if __name__ == "__main__":
    main()
