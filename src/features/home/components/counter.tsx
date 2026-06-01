import { StyleSheet, Text } from 'react-native';

interface CounterProps {
    count: number;
}

export default function Counter({
    count,
}: CounterProps) {
    return (
        <Text
            style={[
                styles.counter,
                count < 0 && styles.negativeCounter,
            ]}>
            Counter: {count}
        </Text>
    );
}

const styles = StyleSheet.create({
    counter: {
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 20,
        color: '#111827',
    },

    negativeCounter: {
        color: '#DC2626',
    },
});