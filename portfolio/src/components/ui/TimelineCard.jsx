export default function TimelineCard({ title, period, organization, url, description }) {
  return (
    <div className="flex gap-4">
      <div className="w-[4px] self-stretch bg-[#858581] rounded-full" />

      <div className="border border-gray-700 rounded-lg w-full sm:w-96 bg-[#2b2b2b] p-3">
        <div className="flex justify-between items-center gap-2 flex-wrap font-title">
          <h2 className="text-[#0eeae7] text-[16px] font-bold">{title}</h2>
          <p className="text-white text-sm">{period}</p>
        </div>

        <div className="mt-2">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-[16px]"
            >
              {organization}
            </a>
          ) : (
            <p className="text-blue-500 text-[16px]">{organization}</p>
          )}
          <p className="text-[#f6f6f6] text-sm mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
}