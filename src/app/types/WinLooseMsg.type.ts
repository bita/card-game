export type WinLooseMsgType = {
    onConfirm: () => void
    time: string
    moves: number
    status: 'win' | 'loose'
}