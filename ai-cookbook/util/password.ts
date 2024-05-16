import bcrypt from 'bcrypt';

export async function saltAndHashPassword(password:string) {
     // Generate a salt with a specific number of rounds. The higher the number, the more secure the hash.
    // 10 is a commonly used number, but you can adjust it based on your security requirements.
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
        
    // Hash the password with the generated salt.
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword as string;
}
