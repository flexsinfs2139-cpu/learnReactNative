import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8FAFC',
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
  },

  count: {
    fontSize: 16,
    fontWeight: '600',
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  statText: {
    color: '#64748B',
    fontWeight: '600',
  },

  inputRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },

  input: {
    flex: 1,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 12,
    paddingHorizontal: 14,
  },

  addButton: {
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 12,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: '600',
  },

  todoCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  todoContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  todoTitle: {
    marginLeft: 10,
    fontSize: 16,
  },

  completedTodo: {
    textDecorationLine: 'line-through',
    color: '#94A3B8',
  },

  deleteIcon: {
    fontSize: 18,
  },

  emptyContainer: {
    alignItems: 'center',
    marginTop: 60,
  },

  emptyEmoji: {
    fontSize: 60,
  },

  emptyText: {
    marginTop: 12,
    color: '#64748B',
  },
});