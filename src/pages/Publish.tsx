import { PublishingPanel } from '../components/publishing/PublishingPanel'

export function Publish() {
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
      <PublishingPanel idPrefix="page-publish" />
    </div>
  )
}
