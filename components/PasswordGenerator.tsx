/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type History = {
    date: Date;
    password: string;
};

const PasswordGenerator = () => {
    // states
    const [length, setLength] = useState('');
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [includeLowercase, setIncludeLowercase] = useState(false);
    const [includeUppercase, setIncludeUppercase] = useState(false);
    const [suceessMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // history
    const [history, setHistory] = useState<History[]>([]);

    // functions
    const generatePassword = async (len: number) => {
        const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
        const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+-={}[]:";\'<>?,./|\\';

        let chars = '';
        if (includeLowercase) {
            chars += lowerCase;
        }
        if (includeUppercase) {
            chars += upperCase;
        }
        if (includeNumbers) {
            chars += numbers;
        }
        if (includeSymbols) {
            chars += symbols;
        }

        if (chars === '') {
            throw new Error('Please select atleast one option');
        }

        let password = '';
        for (let i = 0; i < len; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return password;
    };

    const handleGeneratePassword = async () => {
        try {
            // First check if the length is empty
            if (length === '') {
                throw new Error('Please enter a length');
            }
            // Now check if the length is a number
            if (isNaN(Number(length))) {
                throw new Error('Length must be a number');
            }

            const len = Number(length);
            if (len < 4) {
                throw new Error('Length must be atleast 4');
            }

            if (len > 20) {
                throw new Error('Length must be atmost 20');
            }

            const password = await generatePassword(len);
            // update the history
            const date = new Date();
            setHistory([...history, { date, password }]);
            setSuccessMessage(password);

        } catch (error : any){
            setErrorMessage(error.message);
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        }

    };

    const resetState = () => {
        setIncludeNumbers( _ => false);
        setIncludeSymbols( _ => false);
        setIncludeLowercase( _ => false);
        setIncludeUppercase( _ => false);
        setLength( _ => '');
        setErrorMessage( _ => '');
        setSuccessMessage( _ => '');
    };

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'July',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>🔐 Password Generator</Text>
            <View style={styles.formContainer}>
                <View style={styles.lengthContainer}>
                    <Text style={styles.lengthLabel}>Length</Text>
                    <TextInput
                        style={styles.lengthInput}
                        value={length}
                        onChangeText={(val) => setLength(val)}
                        keyboardType="number-pad"
                        placeholder="Ex: 8"
                    />
                </View>
                <View style={styles.numbersContainer}>
                    <Text style={styles.numbersLabel}>Incldue Numbers ?</Text>
                    <BouncyCheckbox
                        isChecked={includeNumbers}
                        fillColor="#00a261"
                        onPress={(isChecked: boolean) => setIncludeNumbers(isChecked)}
                    />
                </View>
                <View style={styles.symbolsContainer}>
                    <Text style={styles.symbolsLabel}>Include Symbols ?</Text>
                    <BouncyCheckbox
                        isChecked={includeSymbols}
                        fillColor="#00a261"
                        onPress={(isChecked: boolean) => setIncludeSymbols(isChecked)}
                    />
                </View>
                <View style={styles.lowercaseContainer}>
                    <Text style={styles.lowercaseLabel}>Include Lowercase ?</Text>
                    <BouncyCheckbox
                        isChecked={includeLowercase}
                        fillColor="#00a261"
                        onPress={(isChecked: boolean) => setIncludeLowercase(isChecked)}
                    />
                </View>
                <View style={styles.uppercaseContainer}>
                    <Text style={styles.uppercaseLabel}>Include Uppercase ?</Text>
                    <BouncyCheckbox
                        isChecked={includeUppercase}
                        fillColor="#00a261"
                        onPress={(isChecked: boolean) => setIncludeUppercase(isChecked)}
                    />
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.generateButton}
                        onPress={handleGeneratePassword}>
                        <Text style={styles.generateButtonText}>Generate Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.resetButton}
                        onPress={resetState}>
                        <Text style={styles.resetButtonText}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* Error */}
            {
                errorMessage !== '' && (
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>{errorMessage}</Text>
                    </View>
                )
            }

            {/* Success */}
            {
                suceessMessage !== '' && (
                    <View style={styles.successContainer}>
                        <Text selectable style={styles.successText}>{suceessMessage}</Text>
                        {/* Long press for more options */}
                        <Text style={styles.copyText}>Long press to copy</Text>
                    </View>
                )
            }
            {/* history */}
            <View style={styles.historyContainer}>
                {
                    history.map((item, index) => (
                        <View key={index} style={styles.historyItem}>
                            <Text selectable style={styles.historyPassword}>{item.password}</Text>
                            <Text>
                                --
                            </Text>
                            <Text style={styles.historyDate}>
                                {days[item.date.getDay()]}, {item.date.getDate()}{' '}
                                {months[item.date.getMonth()]} {item.date.getFullYear()}
                            </Text>
                        </View>
                    ))
                }
            </View>
        </View>
    );
};

export default PasswordGenerator;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 20,
    },
    formContainer: {
        padding: 30,
        backgroundColor: '#242424',
        borderRadius: 10,
        borderColor: '#5f96de',
        borderWidth: 1,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 10,
        borderRadius: 5,
        textAlign: 'center',
    },
    lengthContainer: {
        padding: 10,
        borderRadius: 5,
        gap: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    lengthLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    lengthInput: {
        backgroundColor: '#242424',
        padding: 8,
        borderRadius: 5,
        borderColor: '#00a261',
        borderWidth: 1,
        width: 100,
    },
    errorContainer: {
        padding: 10,
        backgroundColor: '#852929',
        borderRadius: 5,
    },
    errorText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    successContainer: {
        padding: 20,
        backgroundColor: '#1d1d1d',
        borderRadius: 5,
    },
    successText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    numbersContainer: {
        padding: 10,
        borderRadius: 5,
        gap: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    numbersLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    numbersInput: {
        backgroundColor: '#242424',
        padding: 8,
        borderRadius: 5,
        borderColor: '#525252',
        borderWidth: 1,
        width: 100,
    },
    symbolsContainer: {
        padding: 10,
        borderRadius: 5,
        gap: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    symbolsLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    symbolsInput: {
        backgroundColor: '#242424',
        padding: 8,
        borderRadius: 5,
        borderColor: '#525252',
        borderWidth: 1,
        width: 100,
    },
    lowercaseContainer: {
        padding: 10,
        borderRadius: 5,
        gap: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    lowercaseLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    lowercaseInput: {
        backgroundColor: '#242424',
        padding: 8,
        borderRadius: 5,
        borderColor: '#525252',
        borderWidth: 1,
        width: 100,
    },
    uppercaseContainer: {
        padding: 10,
        borderRadius: 5,
        gap: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    uppercaseLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    uppercaseInput: {
        backgroundColor: '#242424',
        padding: 8,
        borderRadius: 5,
        borderColor: '#525252',
        borderWidth: 1,
        width: 100,
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    generateButton: {
        backgroundColor: '#5f96de',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal: 'auto',
        width: '50%',
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    generateButtonText: {
        textAlign: 'center',
        color: '#000',
    },
    resetButton: {
        backgroundColor: '#5f96de',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal: 'auto',
        width: '50%',
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    resetButtonText: {
        textAlign: 'center',
        color: '#000',
        // fontWeight: 'bold',
    },
    historyContainer: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#242424',
    },
    historyItem: {
        padding: 10,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
    },
    historyPassword: {
        fontSize: 16,
        fontWeight: 'bold',
        borderBottomColor: '#6ce6b5',
        borderBottomWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    historyDate: {
        fontSize: 13,
        fontWeight: 'bold',
        padding: 10,
        borderRadius: 5,
    },
    copyText: {
        color: '#6ce6b5',
        fontSize: 12,
        textAlign: 'right',
        marginTop: 15,
    },
});
