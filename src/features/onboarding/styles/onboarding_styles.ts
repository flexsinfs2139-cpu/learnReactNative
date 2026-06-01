import { StyleSheet } from 'react-native';

import { Colors } from '@/core/constants/colors';
import { Radius } from '@/core/theme/radius';
import { Spacing } from '@/core/theme/spacing';
import {
    FontSize,
    FontWeight,
} from '@/core/theme/typography';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Spacing.lg,
        backgroundColor: Colors.white,
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    emoji: {
        fontSize: 90,
        marginBottom: Spacing.lg,
    },

    title: {
        fontSize: FontSize.xxl,
        fontWeight: FontWeight.bold,
        color: Colors.textPrimary,
        textAlign: 'center',
        marginBottom: Spacing.sm + Spacing.xs,
    },

    subtitle: {
        textAlign: 'center',
        color: Colors.textSecondary,
        fontSize: FontSize.md,
        lineHeight: 24,
    },

    button: {
        backgroundColor: Colors.primary,
        paddingVertical: Spacing.md,
        borderRadius: Radius.md,
        marginBottom: Spacing.lg,
    },

    buttonText: {
        color: Colors.white,
        textAlign: 'center',
        fontSize: FontSize.md,
        fontWeight: FontWeight.semiBold,
    },
});