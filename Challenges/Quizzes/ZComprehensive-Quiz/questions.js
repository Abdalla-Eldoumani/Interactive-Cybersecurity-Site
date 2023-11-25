export const questions = [
    {
        question: "What is the primary goal of cryptography?",
        options: ["Data analysis", "Communication enhancement", "Providing confidentiality, integrity, and authenticity in communication", "Data storage"],
        answer: "Providing confidentiality, integrity, and authenticity in communication"
    },
    {
        question: "Cryptography dates back to:",
        options: ["The 20th century", "Ancient civilizations", "The Renaissance era", "The Industrial Revolution"],
        answer: "Ancient civilizations"
    },
    {
        question: "Which of the following is not a characteristic of the Caesar Cipher?",
        options: ["It's a symmetric-key algorithm", "It uses alphabetical rotation", "It's a polyalphabetic cipher", "It involves a fixed shift of letters in the alphabet"],
        answer: "It's a polyalphabetic cipher"
    },
    {
        question: "In a Caesar Cipher, if the key is 3, what does 'A' become?",
        options: ["C", "D", "E", "B"],
        answer: "D"
    },
    {
        question: "What makes the Monoalphabetic Substitution Cipher different from the Caesar Cipher?",
        options: ["It uses multiple alphabets", "It shifts letters in a uniform manner", "It changes each letter to a different, specific letter", "It's more secure"],
        answer: "It changes each letter to a different, specific letter"
    },
    {
        question: "A Monoalphabetic Substitution Cipher is vulnerable to:",
        options: ["Brute force attacks", "Frequency analysis", "Keylogging", "Phishing attacks"],
        answer: "Frequency analysis"
    },
    {
        question: "What is a key characteristic of Polyalphabetic Ciphers?",
        options: ["They use a single alphabet", "They use a single substitution method", "They use multiple alphabets for encryption", "They are less secure than Monoalphabetic Ciphers"],
        answer: "They use multiple alphabets for encryption"
    },
    {
        question: "The Vigenère Cipher uses:",
        options: ["A tabula recta", "A single alphabet", "A fixed number shift", "A digital algorithm"],
        answer: "A tabula recta"
    },
    {
        question: "Which of the following is true about the Vigenère Cipher?",
        options: ["It's less secure than the Caesar Cipher", "It's a monoalphabetic cipher", "It uses a keyword for encryption", "It's a modern digital encryption method"],
        answer: "It uses a keyword for encryption"
    },
    {
        question: "The strength of the Vigenère Cipher heavily depends on:",
        options: ["The length of the plaintext", "The complexity of the tabula recta", "The choice and length of the keyword", "The number of alphabets used"],
        answer: "The choice and length of the keyword"
    },
    {
        question: "T/F: Cryptography is only about keeping secrets.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "T/F: The Caesar Cipher is an example of a polyalphabetic cipher.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "T/F: In the Caesar Cipher, a shift of 0 effectively encrypts the text.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "T/F: The Monoalphabetic Substitution Cipher uses a fixed shift for all letters.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "T/F: Frequency analysis is ineffective against the Monoalphabetic Substitution Cipher.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "T/F: Polyalphabetic ciphers are more secure than monoalphabetic ciphers because they use multiple substitution methods.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "T/F: The Vigenère Cipher was developed in the 20th century.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "T/F: The key in a Vigenère Cipher is typically a single letter.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "T/F: Decrypting a message encrypted with the Vigenère Cipher does not require knowledge of the keyword.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "T/F: The Caesar Cipher was used by Julius Caesar in political communications.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "What type of cipher is the Caesar Cipher classified as?",
        options: ["Transposition cipher", "Substitution cipher", "Polyalphabetic cipher", "Asymmetric cipher"],
        answer: "Substitution cipher"
    },
    {
        question: "How many possible keys exist for the Caesar Cipher?",
        options: ["25", "26", "10", "Unlimited"],
        answer: "25"
    },
    {
        question: "In a Monoalphabetic Substitution Cipher, what does each letter in the plaintext correspond to?",
        options: ["A unique number", "The same letter in the cipher alphabet", "A unique letter in a scrambled alphabet", "A letter shifted by a fixed number"],
        answer: "A unique letter in a scrambled alphabet"
    },
    {
        question: "What is a significant limitation of the Caesar Cipher?",
        options: ["Its complexity", "The unlimited number of keys", "Its susceptibility to frequency analysis", "The requirement of multiple alphabets"],
        answer: "Its susceptibility to frequency analysis"
    },
    {
        question: "The Vigenère Cipher is more secure than the Caesar Cipher because it:",
        options: ["Uses a single alphabet", "Employs multiple alphabets", "Has a shorter keyword", "Is a digital cipher"],
        answer: "Employs multiple alphabets"
    },
    {
        question: "In the Vigenère Cipher, what determines the row used for encryption in the Vigenère table?",
        options: ["The letter of the plaintext", "The length of the message", "The letter of the keyword", "The position of the letter in the alphabet"],
        answer: "The letter of the keyword"
    },
    {
        question: "The Vigenère Cipher was vulnerable to attacks if the keyword was:",
        options: ["Long and complex", "Short or had a pattern", "A single letter", "A number"],
        answer: "Short or had a pattern"
    },
    {
        question: "How does the Vigenère Cipher handle the plaintext 'HELLO' with the keyword 'KEY'?",
        options: ["It remains 'HELLO'", "Becomes 'ITSSG'", "Transforms to 'RIJVS'", "Changes to 'KFAJQ'"],
        answer: "RIJVS"
    },
    {
        question: "Which method is used to break the Vigenère Cipher through keyword length analysis?",
        options: ["Frequency analysis", "Kasiski examination", "Brute force", "Differential cryptanalysis"],
        answer: "Kasiski examination"
    },
    {
        question: "The term 'cryptography' originates from Greek words meaning:",
        options: ["Secret writing", "Digital encryption", "Code breaking", "Hidden messages"],
        answer: "Secret writing"
    },
    {
        question: "T/F: The Vigenère Cipher is a type of symmetric-key algorithm.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "T/F: The Caesar Cipher was one of the earliest examples of encryption.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "T/F: The Monoalphabetic Substitution Cipher treats uppercase and lowercase lettersdifferently.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "T/F: Cryptography plays a crucial role in securing online transactions.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "T/F: The Caesar Cipher is highly effective against modern cryptographic attacks.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "T/F: The Vigenère Cipher was unbreakable until the 19th century.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "T/F: A single scrambled alphabet is used for all messages in a MonoalphabeticSubstitution Cipher.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "T/F: The Caesar Cipher is named after a Roman emperor.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "T/F: In a Monoalphabetic Substitution Cipher, 'A' can be substituted by different letters indifferent parts of the message.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "T/F: Understanding cryptography is essential for experts only, not for regular digitaltechnology users.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "The Caesar Cipher is primarily known for its:",
        options: ["Complexity", "Use of multiple alphabets", "Simplicity and historical significance", "Resistance to cryptanalysis"],
        answer: "Simplicity and historical significance"
    },
    {
        question: "In a Monoalphabetic Substitution Cipher, the key is essentially:",
        options: ["The number of positions to shift each letter", "The scrambled version of the alphabet", "A single letter", "A numerical code"],
        answer: "The scrambled version of the alphabet"
    },
    {
        question: "What aspect of language makes Monoalphabetic Ciphers vulnerable?",
        options: ["Syntax rules", "Letter frequency patterns", "Grammar", "Spelling variations"],
        answer: "Letter frequency patterns"
    },
    {
        question: "Polyalphabetic Ciphers were developed to:",
        options: ["Simplify encryption methods", "Address vulnerabilities in monoalphabetic ciphers", "Make decryption easier", "Encrypt numeric data only"],
        answer: "Address vulnerabilities in monoalphabetic ciphers"
    },
    {
        question: "A key feature of the Vigenère Cipher is:",
        options: ["Its digital nature", "The use of a single alphabet in different positions", "The use of a keyword to determine the shift in each letter", "Its resistance to all forms of cryptanalysis"],
        answer: "The use of a keyword to determine the shift in each letter"
    },
    {
        question: "Decrypting the Vigenère Cipher requires:",
        options: ["The same tabula recta used for encryption", "Knowledge of the keyword", "A different keyword", "A complex mathematical formula"],
        answer: "Knowledge of the keyword"
    },
    {
        question: "Which of the following is a characteristic of the digital age of cryptography?",
        options: ["Decreased importance of cryptography", "Use of simple manual systems", "Sophisticated mathematical algorithms", "Exclusive use of the Caesar Cipher"],
        answer: "Sophisticated mathematical algorithms"
    },
    {
        question: "The term 'cipher' in cryptography refers to:",
        options: ["A secret message", "The algorithm used for encryption and decryption", "The key used in encryption", "The science of breaking codes"],
        answer: "The algorithm used for encryption and decryption"
    },
    {
        question: "The primary purpose of encryption is to:",
        options: ["Speed up communication", "Make data unreadable to unauthorized individuals", "Store data securely", "Create complex algorithms"],
        answer: "Make data unreadable to unauthorized individuals"
    },
    {
        question: "The Caesar Cipher was used for:",
        options: ["Commercial purposes", "Political and military communication", "Personal messages", "Educational purposes"],
        answer: "Political and military communication"
    },
    {
        question: "T/F: The Caesar Cipher offers a high level of security in modern times.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "T/F: The Vigenère Cipher is considered a breakthrough in the history of cryptography.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "T/F: Polyalphabetic ciphers are easier to break than monoalphabetic ciphers due to their complexity.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "T/F: Frequency analysis is a technique used in breaking polyalphabetic ciphers.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "T/F: Cryptography has become less relevant with the advent of digital technology.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "T/F: The Vigenère table is a grid of alphabets shifted in different directions.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "T/F: The encryption key in a Caesar Cipher can be any number from 1 to 25.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "T/F: In a Monoalphabetic Substitution Cipher, the same plaintext letter is always replaced with the same cipher alphabet letter.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "T/F: The Monoalphabetic Substitution Cipher and the Vigenère Cipher are both examples of symmetric-key algorithms.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "T/F: Knowledge of cryptographic methods is unnecessary for understanding digital security measures.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "What is the primary function of hashing?",
        options: ["Encrypting data", "Creating a fixed-size string of characters", "Increasing data size", "Decreasing data processing time"],
        answer: "Creating a fixed-size string of characters"
    },
    {
        question: "Hashing always increases the size of the original data.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Which of these is an analogy used for hashing in the lecture?",
        options: ["Locking a safe", "Creating a unique ID for any piece of information", "Solving a puzzle", "Writing a book"],
        answer: "Creating a unique ID for any piece of information"
    },
    {
        question: "A simple hash function can turn the word 'cat' into the number 3.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "What does consistency in hash functions mean?",
        options: ["The output is always unpredictable", "The same input always produces the same output", "The output is always unique", "The output is variable"],
        answer: "The same input always produces the same output"
    },
    {
        question: "Hash functions are generally slow to compute.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "What is an important feature of hash functions for security purposes?",
        options: ["Predictability", "Unpredictability", "Consistency", "Reversibility"],
        answer: "Unpredictability"
    },
    {
        question: "Two different inputs will always produce different hashes.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Why is hashing important for password security?",
        options: ["It stores the actual password for easy retrieval", "It creates a unique hash that is stored instead of the password", "It makes passwords easier to remember", "It encrypts the password"],
        answer: "It creates a unique hash that is stored instead of the password"
    },
    {
        question: "Hashing is used to check the integrity of data being downloaded.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "What is the role of 'salting' in storing passwords?",
        options: ["It encrypts the password", "It adds a random piece of data to the password before hashing", "It simplifies the password", "It stores the password in plain text"],
        answer: "It adds a random piece of data to the password before hashing"
    },
    {
        question: "Hash collisions are common in modern hash functions.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "In a blockchain, what does the hash of a block represent?",
        options: ["The number of transactions", "A digital signature", "A seal verifying the data in the block", "The size of the block"],
        answer: "A seal verifying the data in the block"
    },
    {
        question: "Changing the data in one block of a blockchain won't affect its subsequent blocks.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Apart from password security, what is another use of hashing?",
        options: ["Data compression", "User authentication", "Digital signatures", "Data encryption"],
        answer: "Digital signatures"
    },
    {
        question: "Hashing is vulnerable to brute force attacks.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "What is the purpose of adaptive hash functions like bcrypt?",
        options: ["To increase hashing speed", "To decrease hashing complexity", "To make brute force attacks more practical", "To make brute force attacks time-consuming and impractical"],
        answer: "To make brute force attacks time-consuming and impractical"
    },
    {
        question: "In databases, hashing is used primarily for data encryption.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "How does hashing contribute to network security?",
        options: ["By increasing data transfer speeds", "By ensuring data integrity during transmission", "By compressing the data", "By encrypting the data"],
        answer: "By ensuring data integrity during transmission"
    },
    {
        question: "A hash function can convert different types of data, like text and files, into a fixed-size string of characters.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "What is a hash collision?",
        options: ["When a hash function fails", "When two different inputs produce the same hash", "When a hash is decrypted", "When a hash function is consistent"],
        answer: "When two different inputs produce the same hash"
    },
    {
        question: "Salting a password before hashing makes common passwords end up with different hashes.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "In the context of hashing, what does the term 'uniqueness' refer to?",
        options: ["Each user having a unique password", "Each hash function being different", "Each unique input ideally producing a unique hash", "Each hash being unpredictable"],
        answer: "Each unique input ideally producing a unique hash"
    },
    {
        question: "The same hash function applied to the same data will produce different hashes each time.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "What is an advantage of using hashing in large file systems?",
        options: ["It encrypts file contents", "It creates unique identifiers for files, preventing duplication", "It reduces the size of the files", "It increases the speed of the internet"],
        answer: "It creates unique identifiers for files, preventing duplication"
    },
    {
        question: "Hashing is not used in digital signatures.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Why is speed an important property of hash functions?",
        options: ["To ensure data security", "To allow quick data retrieval", "To produce hashes almost instantly, avoiding system delays", "To make it easier to remember passwords"],
        answer: "To produce hashes almost instantly, avoiding system delays"
    },
    {
        question: "The primary purpose of hashing is to secure network communications.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "What is a real-world example of hashing in blockchain technology?",
        options: ["Social media", "Online shopping", "Cryptocurrencies like Bitcoin", "Email communication"],
        answer: "Cryptocurrencies like Bitcoin"
    },
    {
        question: "A hash function can be easily reversed to find the original input data.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "In the context of hashing, what is meant by 'data integrity'?",
        options: ["Protecting data from unauthorized access", "Ensuring that data is not altered or tampered with", "Reducing the size of data for storage", "Encrypting data for secure transmission"],
        answer: "Ensuring that data is not altered or tampered with"
    },
    {
        question: "Hash tables in databases use hashes of data as unique identifiers for quick retrieval.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "What happens when the data in a blockchain block is altered?",
        options: ["The block is automatically deleted", "The hash of the block remains the same", "The hash of the block changes", "The size of the block increases"],
        answer: "The hash of the block changes"
    },
    {
        question: "Using hashing in password security stores the actual password on the website.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "What is the purpose of encrypting the hash in a digital signature?",
        options: ["To verify the sender's identity", "To increase the size of the email", "To compress the email's content", "To change the email's format"],
        answer: "To verify the sender's identity"
    },
    {
        question: "Hashing ensures that even if someone accesses stored passwords, they can see the actual passwords.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Which of these is a challenge faced by hashing?",
        options: ["Easy reversibility", "Vulnerability to brute force attacks", "Slow processing times", "Limited application scope"],
        answer: "Vulnerability to brute force attacks"
    },
    {
        question: "A small change in the input data of a hash function should cause a significant change in the output hash.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "What is the function of bcrypt in terms of hash functions?",
        options: ["To encrypt data", "To create unique identifiers", "To slow down the hash generation process", "To reduce data size"],
        answer: "To slow down the hash generation process"
    },
    {
        question: "Hash functions can only process textual data.",
        options: ["True", "False"], 
        answer: "False"
    },
    {
        question: "Why do VPNs and SSL/TLS protocols rely on hashing?",
        options: ["To speed up data transfer", "To ensure data integrity", "To reduce data size", "To encrypt data"],
        answer: "To ensure data integrity"
    },
    {
        question: "Hashing is a process that converts data into a variable-size string of characters.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "What does hashing do to the password 'Blue123' in the context of storing passwords securely?",
        options: ["Converts it into a fixed-size string like '81d3fa9a...'", "Keeps it as 'Blue123' for easy recall", "Encrypts it into a complex symbol", "Splits it into multiple parts for storage"],
        answer: "Converts it into a fixed-size string like '81d3fa9a...'"
    },
    {
        question: "The same hash can be used to confirm the authenticity and integrity of an email.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "What is the primary benefit of using hashing in digital signatures?",
        options: ["To authenticate and verify the integrity of the content", "To compress the content of the message", "To encrypt the entire message", "To make the signature visually appealing"],
        answer: "To authenticate and verify the integrity of the content"
    },
    {
        question: "In hashing, a unique hash is produced for each unique input, with no exceptions.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "What is the significance of a hash function's speed in its application?",
        options: ["It ensures data security", "It allows for real-time communication", "It enables quick processing of large volumes of data", "It simplifies the hash algorithm"],
        answer: "It enables quick processing of large volumes of data"
    },
    {
        question: "Hashing in blockchain technology is primarily used for encryption.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "How does hashing contribute to data integrity in network security?",
        options: ["By encrypting the data", "By splitting the data into smaller parts", "By ensuring the data received matches the data sent", "By increasing the speed of data transmission"],
        answer: "By ensuring the data received matches the data sent"
    },
    {
        question: "Every hash function is unique and cannot have collisions.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "In the context of hashing, what does the term 'collision' refer to?",
        options: ["A failure in the hash function", "Two different inputs producing the same hash", "A hash function producing an error", "Two similar inputs producing different hashes"],
        answer: "Two different inputs producing the same hash"
    },
    {
        question: "The primary purpose of salting in hashing is to encrypt the password.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Which of these is a use of hashing in everyday digital life?",
        options: ["In password recovery systems", "In creating digital signatures", "In speeding up internet connections", "In enhancing graphic design"],
        answer: "In creating digital signatures"
    },
    {
        question: "Modern hash functions are designed to make collisions extremely rare.",
        options: ["True", "False"], 
        answer: "True"
    },
    {
        question: "What role does hashing play in storing passwords securely?",
        options: ["It stores passwords in plain text", "It converts passwords into a unique hash", "It memorizes passwords for users", "It sends passwords over the network"],
        answer: "It converts passwords into a unique hash"
    },
    {
        question: "Adaptive hash functions, like bcrypt, are designed to be fast for increased efficiency.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Why is unpredictability a crucial property of hash functions?",
        options: ["To make it easy to memorize hashes", "To make hash functions reversible", "To enhance security by making output hashes hard to predict", "To increase the speed of hashing"],
        answer: "To enhance security by making output hashes hard to predict"
    },
    {
        question: "Hashing is used only in the field of digital security.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "In the context of hashing, what does it mean when we say a hash function has 'uniqueness'?",
        options: ["Each user's password is different", "Each hash function is different", "Each unique input ideally produces a unique hash", "The hash is always a unique set of symbols"],
        answer: "Each unique input ideally produces a unique hash"
    },
    {
        question: "The primary goal of hashing in data storage is to encrypt the data.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "What does the term 'malware' stand for?",
        options: ["Malicious Worm", "Malicious Software", "Malfunctioning System", "Malwarebytes"],
        answer: "Malicious Software"
    },
    {
        question: "How does a virus spread its payload to harm a computer?",
        options: ["Through physical contact", "By hiding in programs", "Via email attachments", "Through voice commands"],
        answer: "By hiding in programs"
    },
    {
        question: "What distinguishes a worm from a virus?",
        options: ["Worms only spread through emails", "Worms spread through networks", "Worms always encrypt files", "Viruses are harder to detect"],
        answer: "Worms spread through networks"
    },
    {
        question: "What is a Trojan in the context of malware?",
        options: ["A type of worm", "Malware disguised as harmless software", "A computer security protocol", "A type of virus"],
        answer: "Malware disguised as harmless software"
    },
    {
        question: "What is the purpose of adware?",
        options: ["Encrypting files", "Collecting user information for targeted ads", "Spreading through networks", "Activating logic bombs"],
        answer: "Collecting user information for targeted ads"
    },
    {
        question: "Which malware type is known for running with the highest level of privileges and hiding deep within a system?",
        options: ["Logic Bomb", "Spyware", "Rootkit", "Dropper"],
        answer: "Rootkit"
    },
    {
        question: "What does ransomware do to data and resources?",
        options: ["Encrypts and holds them for ransom", "Deletes them permanently", "Shares them with third parties", "Modifies system settings"],
        answer: "Encrypts and holds them for ransom"
    },
    {
        question: "What is the primary function of a keylogger?",
        options: ["Encrypting files", "Spreading through networks", "Detecting pressed buttons and computer activity", "Collecting user information for ads"],
        answer: "Detecting pressed buttons and computer activity"
    },
    {
        question: "Which type of malware is a subset of a Trojan and installs additional malware?",
        options: ["Adware", "Dropper", "Worm", "Ransomware"],
        answer: "Dropper"
    },
    {
        question: "What does a logic bomb do?",
        options: ["Encrypts files", "Hidden Threat that activates based on certain conditions", "Collects user information for ads", "Spreads through networks"],
        answer: "Hidden Threat that activates based on certain conditions"
    },
    {
        question: "True or False: Adware collects user information and uses it to promote targeted advertisements.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "True or False: A virus becomes an inseparable part of a computer's code.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "True or False: Worms are easier to detect than viruses.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "True or False: Keyloggers compromise the privacy of a clipboard.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "True or False: Behaviour-based detection looks for known virus signatures.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "True or False: False positives in virus detection negatively affect availability.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "True or False: Spyware is frequently tied in with genuine software.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "Which aspect of security does a false negative primarily impact negatively?",
        options: ["Availability", "Confidentiality", "Integrity", "Both A and C"],
        answer: "Both A and C"
    },
    {
        question: "Which malware type is known for spreading with minimal user engagement through a network?",
        options: ["Virus", "Worm", "Trojan", "Adware"],
        answer: "Worm"
    },
    {
        question: "What is the primary purpose of a dropper?",
        options: ["Spreading through networks", "Encrypting files", "Installing another malware", "Detecting pressed buttons"],
        answer: "Installing another malware"
    },
    {
        question: "Which detection method relies on maintaining a list of known viruses and their characteristics?",
        options: ["Signature-based detection", "Behavior-based detection", "Machine learning detection", "False positive detection"],
        answer: "Signature-based detection"
    },
    {
        question: "What does ransomware hold as ransom against the user?",
        options: ["User information", "System settings", "Data and resources", "Files with a database"],
        answer: "Data and resources"
    },
    {
        question: "Can Keylogger use its primary function to access passwords?",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "What is the primary characteristic of behaviour-based detection?",
        options: ["Looking for known virus signatures", "Analysing payload effects and system changes", "Installing additional malware", "Activating based on certain conditions"],
        answer: "Analysing payload effects and system changes"
    },
    {
        question: "What is the main issue with signature-based detection?",
        options: ["Works only on known viruses", "Requires minimal user engagement", "Is resistant to false positives", "Depends on machine learning algorithms"],
        answer: "Works only on known viruses"
    },
    {
        question: "True or False: A dropper installs additional malware but cannot be redownloaded.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "True or False: Rootkits are primarily spread through email attachments.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "True or False: Behaviour-based detection relies on analysing known virus signatures.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "True or False: Keyloggers cannot compromise the privacy of a clipboard.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Are Pop-up ads a form of adware?",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "Which type of malware is known for running as a hypervisor or firmware?",
        options: ["Logic Bomb", "Adware", "Rootkit", "Keylogger"],
        answer: "Rootkit"
    },
    {
        question: "What is the primary characteristic of false positives in virus detection?",
        options: ["Affects confidentiality negatively", "Affects availability negatively", "Affects integrity negatively", "Affects all aspects equally"],
        answer: "Affects availability negatively"
    },
    {
        question: "What is the main challenge of false negatives in virus detection?",
        options: ["Affects confidentiality negatively", "Affects availability negatively", "Affects integrity negatively", "Allows actual viruses to go undetected"],
        answer: "Allows actual viruses to go undetected"
    },
    {
        question: "What is the primary characteristic of machine learning detection in virus detection?",
        options: ["Analyzing known virus signatures", "Looking for suspicious patterns of behavior", "Maintaining a list of known viruses", "Activating based on certain conditions"],
        answer: "Looking for suspicious patterns of behavior"
    },
    {
        question: "True or False: Worms spread through networks with maximal user engagement.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "True or False: Logic bombs always give a warning to the user before activating.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "True or False: Adware primarily restricts data and resources on a computer.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "True or False: Rootkits are easily removable from a system.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "True or False: Ransomware is known for modifying system settings.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "True or False: Keyloggers compromise the privacy of a clipboard.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "True or False: Signature-based detection relies on analyzing suspicious patterns of behavior.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "True or False: False positives negatively affect confidentiality.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "True or False: Spyware is often independent and not tied to genuine software.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "What is the primary challenge with signature-based virus detection?",
        options: ["Works only on known viruses", "Requires maximal user engagement", "Is resistant to false positives", "Depends on machine learning algorithms"],
        answer: "Works only on known viruses"
    },
    {
        question: "What does the term 'false negative' in virus detection refer to?",
        options: ["Declaring an innocent program as a virus", "Declaring a virus as innocent", "Both A and B", "Neither A nor B"],
        answer: "Declaring a virus as innocent"
    },
    {
        question: "True or False: Viruses can spread through networks without any user interaction.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "True or False: Adware primarily aims to activate logic bombs on the user's computer.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "True or False: Polymorphic viruses modify themselves to look the same, making them easily detectable.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "True or False: Spyware is always tied to genuine software, making it easily identifiable.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "True or False: Rootkits can only run as hypervisors, not as firmware.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "True or False: Keyloggers are primarily used to compromise the privacy of a computer's webcam.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "What is the primary characteristic of polymorphic viruses?",
        options: ["They modify themselves to look different", "They encrypt files with a database", "They activate based on certain conditions", "They spread through networks with maximal user engagement"],
        answer: "They modify themselves to look different"
    },
    {
        question: "What is the main issue with relying solely on signature-based detection?",
        options: ["Resistance to false positives", "Vulnerability to polymorphic viruses", "High efficiency with unknown viruses", "Low dependency on machine learning algorithms"],
        answer: "Vulnerability to polymorphic viruses"
    },
    {
        question: "Which malware type is likely to be resistant to false positives in detection?",
        options: ["Logic Bomb", "Worm", "Trojan", "Ransomware"],
        answer: "Logic Bomb"
    },
    {
        question: "What is the primary characteristic of false positives in virus detection?",
        options: ["Affects confidentiality negatively", "Affects availability negatively", "Affects integrity negatively", "Triggers unnecessary warnings for innocent programs"],
        answer: "Triggers unnecessary warnings for innocent programs"
    },
    {
        question: "Which malware type is known for spreading with maximal user engagement?",
        options: ["Virus", "Worm", "Trojan", "Adware"],
        answer: "Virus"
    },
    {
        question: "True or False: Adware can compromise the privacy of a computer's webcam.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "True or False: Behaviour-based detection relies solely on known virus signatures.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "True or False: Machine learning detection relies on analysing known virus signatures.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "True or False: A false positive primarily affects the availability of the system.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "Which detection method relies on maintaining a list of known viruses and their characteristics?",
        options: ["Signature-based detection", "Behavior-based detection", "Machine learning detection", "False positive detection"],
        answer: "Signature-based detection"
    },
    {
        question: "True or False: Worms can spread through networks without any hidden payload.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "What is privacy?",
        options: ["A secret spot only on the internet", "Your ability to control access to personal space and information", "Leaving footprints online", "Public information"],
        answer: "Your ability to control access to personal space and information"
    },
    {
        question: "Why should you care about privacy?",
        options: ["It's unnecessary in the digital age", "Protects you from fraud and embarrassing situations", "Increases your online visibility", "Allows others to judge you freely"],
        answer: "Protects you from fraud and embarrassing situations"
    },
    {
        question: "What is identifiable information?",
        options: ["Breadcrumbs left online", "Non-identifiable details", "Key details like social media profiles and online purchases", "VIP section of personal data"],
        answer: "Key details like social media profiles and online purchases"
    },
    {
        question: "What are non-identifiable information?",
        options: ["Key details like social media profiles", "Online purchases", "VIP section of personal data", "Breadcrumbs online that alone may not mean much but paint a picture when combined"],
        answer: "Breadcrumbs online that alone may not mean much but paint a picture when combined"
    },
    {
        question: "What should giving consent for sharing information be?",
        options: ["An active choice – opt-in", "An automatic choice – opt-out", "Unnecessary", "Rarely done"],
        answer: "An active choice – opt-in"
    },
    {
        question: "What does public information mean?",
        options: ["Only seen by potential employers", "Information seen by everyone", "Breadcrumbs left online", "VIP section of personal data"],
        answer: "Information seen by everyone"
    },
    {
        question: "What is the significance of understanding online privacy in the real world?",
        options: ["No significance", "Helps in maintaining an active digital presence", "Helps in understanding the value of privacy in the digital age", "Increases online judgment"],
        answer: "Helps in understanding the value of privacy in the digital age"
    },
    {
        question: "True/False: Privacy is the same as having a secret spot only on the internet.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "True/False: Your digital footprint includes the websites you visit, the things you like and share, and the searches you make.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "True/False: Sensitive information should be accessible to everyone.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "True/False: Consent for sharing information should be an automatic choice – opt-out.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "True/False: Non-identifiable information, when combined, can paint a picture of who you are.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "True/False: Every time you go online, you leave digital footprints behind.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "True/False: Privacy in the digital age is unnecessary.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "True/False: Giving consent for sharing information should be an active choice – opt-in.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "True/False: Sensitive information is like the VIP section of your personal data - only special, trusted people or entities should have access.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "True/False: Your online footprints can tell a story about you, sometimes unintentionally.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "True/False: Public information is only visible to your best friend.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "True/False: Privacy in the real world is unrelated to online scenarios.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "True/False: Non-identifiable information alone can reveal a lot about you.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "What is a data breach analogous to?",
        options: ["Opening a bank account", "Cracking a vault with valuables", "Purchasing online goods", "Writing a letter"],
        answer: "Cracking a vault with valuables"
    },
    {
        question: "Who can be affected by data breaches?",
        options: ["Only individuals", "Only big companies", "Everyone, including big companies, small websites, and governments", "Only governments"],
        answer: "Everyone, including big companies, small websites, and governments"
    },
    {
        question: "What is surveillance in the context of privacy risks?",
        options: ["Watching someone with their knowledge", "Collecting bits of digital behavior over time to create a profile without the individual’s consent", "Public safety awareness", "Only government monitoring"],
        answer: "Collecting bits of digital behavior over time to create a profile without the individual’s consent"
    },
    {
        question: "Why is identity theft a concern for children as well?",
        options: ["They have less valuable information", "Children's identities are a clean slate", "Children are not targeted for identity theft", "They are protected by law"],
        answer: "Children's identities are a clean slate"
    },
    {
        question: "How do free apps and services often utilize your data?",
        options: ["They encrypt it for security", "They use it to enhance user experience", "They collect and sell it to advertisers", "b and c"],
        answer: "They collect and sell it to advertisers"
    },
    {
        question: "What are cookies in the context of privacy risks?",
        options: ["Physical objects used for tracking", "Digital breadcrumbs that websites use to remember you", "Passwords for online accounts", "Tracking devices installed on your computer"],
        answer: "Digital breadcrumbs that websites use to remember you"
    },
    {
        question: "What is one of the purposes of cookies on websites?",
        options: ["To remember your favorite recipes", "To remember login details", "To play games online", "To track your physical location"],
        answer: "To remember login details"
    },
    {
        question: "What is phishing in the context of privacy risks?",
        options: ["A type of fishing sport", "Scammers pretending to be legitimate to obtain personal info", "A form of digital currency", "A method of secure online communication"],
        answer: "Scammers pretending to be legitimate to obtain personal info"
    },
    {
        question: "True/False: Data breaches can only happen to big companies.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "True/False: Surveillance is primarily about watching someone without their knowledge without collecting bits of digital behavior.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "True/False: Identity theft recovery is a quick and simple process.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Unwanted data collection is solely about information you type into forms.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Cookies are only used for remembering login details.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "All tracking, including cookies, is considered bad for privacy.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Scams are always easy to detect and recognize.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Free apps and services never collect and sell user data to advertisers.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Identity theft is a risk only for adults.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Unwanted data collection includes information like IP addresses and device IDs.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "Surveillance is always done with blatant signs, so individuals are aware it's happening.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Phishing is analogous to legitimate digital communication.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Cookies can make your life easier but do not involve tracking.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "What is a passphrase?",
        options: ["A sequence of numbers", "A sequence of words or a sentence", "A combination of symbols and letters", "Your birthdate"],
        answer: "A sequence of words or a sentence"
    },
    {
        question: "It is advisable to use the same password across multiple sites for easier memorization.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Text messages are the most secure form of Two-Factor Authentication.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Why is using an app or a physical token recommended for 2FA?",
        options: ["They are easier to set up", "They are more secure than text messages", "They are cheaper", "They work without an internet connection"],
        answer: "They are more secure than text messages"
    },
    
    {
        question: "Before posting anything online, it is important to consider the potential future consequences.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "What is the purpose of teaching friends and family about online privacy?",
        options: ["To increase your social media following", "To make them aware of potential risks", "To impress them with your knowledge", "To get more likes on your posts"],
        answer: "To make them aware of potential risks"
    },
    {
        question: "Privacy settings on new apps and social platforms are often set to share less by default.",
        options: ["True", "False"],
        answer: "False"
    },
    
    {
        question: "Why is it important to actively choose privacy settings?",
        options: ["To increase social media engagement", "Defaults are often set to share more", "It's a requirement by law", "It saves time"],
        answer: "Defaults are often set to share more"
    },
    {
        question: "Reading the terms and conditions is unnecessary as they don't impact your privacy.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Data encryption is like sending personal letters without any code.",
        options: ["True", "False"],
        answer: "False"
    },
    
    {
        question: "How can you ensure your connection to a website is encrypted when browsing online?",
        options: ["Look for 'http://' in the web address", "Look for a padlock icon in the address bar", "Check the website's privacy policy", "Use a virtual private network (VPN)"],
        answer: "Look for a padlock icon in the address bar"
    },
    {
        question: "Regularly updating your software is not necessary for maintaining privacy.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Using reputable antivirus and anti-malware software is unnecessary for privacy protection.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "What is an analogy given for data encryption?",
        options: ["Sending a postcard", "Sending a letter without an envelope", "Sending a letter written in a code that only the intended recipient can understand", "Sending a letter with a tracking device"],
        answer: "Sending a letter written in a code that only the intended recipient can understand"
    },
    {
        question: "It is advisable to keep your passwords simple and easy to remember.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "What is the primary purpose of Two-Factor Authentication?",
        options: ["To make login processes faster", "To add an extra layer of security", "To replace passwords", "To track user behavior"],
        answer: "To add an extra layer of security"
    },
    {
        question: "Why is it important to consider the impact on your job prospects or personal relationships before posting online?",
        options: [
            "To increase social media followers",
            "To impress friends and family",
            "Future consequences and privacy",
            "It has no impact on personal life"
        ],
        answer: "Future consequences and privacy"
    },
    {
        question: "What is the recommended action if a company changes its privacy policy?",
        options: [
            "Ignore the change",
            "Delete your account",
            "Stay informed and understand the impact",
            "Complain to the company"
        ],
        answer: "Stay informed and understand the impact"
    },
    {
        question: "Using the same password for multiple sites is a good practice for memorization.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "What is the significance of the 'https://' in a web address?",
        options: [
            "It indicates a secure, encrypted connection",
            "It stands for 'highly trusted server'",
            "It is a website's ranking indicator",
            "It is a type of internet protocol"
        ],
        answer: "It indicates a secure, encrypted connection"
    },
];