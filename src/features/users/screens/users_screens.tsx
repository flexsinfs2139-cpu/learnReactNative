import { useMemo, useState } from 'react';

import {
    FlatList,
    RefreshControl,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

import {
    AppErrorView,
    AppLoader,
    AppScreen,
} from '@/shared/widgets';

import { router } from 'expo-router';

import UserItem from '../components/user_item';
import { useUsers } from '../hooks/useUsers';

export default function UsersScreen() {
    const users = useUsers();

    const [search, setSearch] = useState('');

    const filteredUsers = useMemo(() => {
        if (!search.trim()) {
            return users.users;
        }

        return users.users.filter((user) =>
            user.name
                .toLowerCase()
                .includes(search.toLowerCase()),
        );
    }, [users.users, search]);

    if (users.loading) {
        return <AppLoader />;
    }

    if (users.error) {
        return (
            <AppErrorView
                message={users.error}
                onRetry={users.loadUsers}
            />
        );
    }

    return (
        <AppScreen>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Users
                    </Text>

                    <Text style={styles.subtitle}>
                        {filteredUsers.length} Members
                    </Text>
                </View>

                <View style={styles.searchContainer}>
                    <Text style={styles.searchIcon}>
                        🔍
                    </Text>

                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search users..."
                        placeholderTextColor="#94A3B8"
                        value={search}
                        onChangeText={setSearch}
                    />
                </View>

                <FlatList
                    data={filteredUsers}
                    keyExtractor={(item) =>
                        item.id.toString()
                    }
                    refreshControl={
                        <RefreshControl
                            refreshing={users.loading}
                            onRefresh={users.loadUsers}
                        />
                    }
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={
                        filteredUsers.length === 0
                            ? styles.emptyListContainer
                            : styles.listContainer
                    }
                    ListEmptyComponent={
                        <View style={styles.emptyContainer}>
                            <Text style={styles.emptyEmoji}>
                                👥
                            </Text>

                            <Text style={styles.emptyTitle}>
                                No Users Found
                            </Text>

                            <Text style={styles.emptyText}>
                                Try a different search term.
                            </Text>
                        </View>
                    }
                    renderItem={({ item }) => (
                        <UserItem
  user={item}
  onPress={() => {
    router.push({
      pathname: '/users/[id]',
      params: {
        id: item.id.toString(),
      },
    });
  }}
/>
                    )}
                />
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F8FAFC',
    },

    header: {
        marginBottom: 24,
    },

    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#0F172A',
    },

    subtitle: {
        marginTop: 4,
        fontSize: 15,
        color: '#64748B',
    },

    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        paddingHorizontal: 16,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#E2E8F0',
    },

    searchIcon: {
        fontSize: 18,
        marginRight: 10,
    },

    searchInput: {
        flex: 1,
        paddingVertical: 14,
        fontSize: 16,
    },

    listContainer: {
        paddingBottom: 20,
    },

    emptyListContainer: {
        flexGrow: 1,
    },

    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
    },

    emptyEmoji: {
        fontSize: 64,
    },

    emptyTitle: {
        marginTop: 16,
        fontSize: 20,
        fontWeight: '700',
    },

    emptyText: {
        marginTop: 8,
        color: '#64748B',
    },
});