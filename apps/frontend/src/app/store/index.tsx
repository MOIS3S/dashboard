import { create } from 'zustand'
import { User } from '../interfaces'

interface AppState {
  users: User[]
  setUsers: (by: User[]) => void
}

const useAppStore = create<AppState>()((set) => ({
  users: [],
  setUsers: (by) => set(() => ({ users: by })),
}))

export default useAppStore