import { useReadListStore } from "@/store/read-list";
import { Switch } from "../switch";

export function ReadingStatus({ ISBN, isReaded }: { ISBN: string, isReaded: boolean }) {
    const editReadingStatus = useReadListStore(store => store.editReadingStatus)
    const status = isReaded ? "Completado" : "Leyendo"
    return <label htmlFor="status-reading" >
        <Switch
            id="status-reading"
            checked={isReaded}
            onCheckedChange={() => editReadingStatus({ ISBN, isReaded })} />
        <span className="font-bold text-xl">{status}</span>
    </label>
}
