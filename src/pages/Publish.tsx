import {
  useCallback,
  useRef,
  useState,
  type DragEvent,
} from 'react'
import { UploadCloud } from 'lucide-react'

const CAPTION_MAX = 2200

export function Publish() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [caption, setCaption] = useState('')
  const [isDragging, setIsDragging] = useState(false)
  const [fileLabel, setFileLabel] = useState<string | null>(null)

  const onPublish = () => {
    window.alert('Demo: TikTok publish API is not connected.')
  }

  const onDrop = useCallback((e: DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file && inputRef.current) {
      const dt = new DataTransfer()
      dt.items.add(file)
      inputRef.current.files = dt.files
      setFileLabel(file.name)
    }
  }, [])

  return (
    <div className="mx-auto max-w-xl space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          Publish
        </h1>
        <p className="mt-1 text-sm text-zinc-500">
          Upload and publish actions are demo-only.
        </p>
      </div>

      <label
        className={[
          'flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed px-6 py-14 transition-colors',
          isDragging
            ? 'border-slate-400 bg-slate-900/50'
            : 'border-zinc-700 bg-zinc-900/30 hover:border-zinc-600 hover:bg-zinc-900/50',
        ].join(' ')}
        onDragEnter={() => setIsDragging(true)}
        onDragOver={(e) => {
          e.preventDefault()
          e.dataTransfer.dropEffect = 'copy'
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={onDrop}
      >
        <input
          ref={inputRef}
          type="file"
          accept="video/*"
          className="sr-only"
          onChange={() => {
            const f = inputRef.current?.files?.[0]
            setFileLabel(f ? f.name : null)
          }}
        />
        <span className="flex size-12 items-center justify-center rounded-full bg-slate-800 text-slate-100">
          <UploadCloud className="size-6" aria-hidden />
        </span>
        <span className="text-center text-sm font-medium text-zinc-200">
          Drag and drop a file here, or click to choose
        </span>
        <span className="text-center text-xs text-zinc-500">
          Video files only (demo)
        </span>
        {fileLabel ? (
          <span className="text-center text-xs font-medium text-slate-300">
            Selected: {fileLabel}
          </span>
        ) : null}
      </label>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <label
            htmlFor="caption"
            className="text-sm font-medium text-zinc-300"
          >
            Caption
          </label>
          <span className="text-xs tabular-nums text-zinc-500">
            {caption.length} / {CAPTION_MAX}
          </span>
        </div>
        <textarea
          id="caption"
          value={caption}
          maxLength={CAPTION_MAX}
          onChange={(e) => setCaption(e.target.value)}
          rows={8}
          placeholder="Write a compelling description…"
          className="w-full resize-y rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-600/30"
        />
      </div>

      <button
        type="button"
        onClick={onPublish}
        className="w-full rounded-lg bg-slate-100 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white"
      >
        Publish to TikTok
      </button>
    </div>
  )
}
