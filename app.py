d = dict(weather = 'clima', earth = 'terra', rain = 'chuva')

def translate_to_portuguese(word):
    return d[word]

    word = input("Enter word: ")
    print(translate_to_portuguese(word))z