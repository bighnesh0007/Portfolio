import { QRCodeSVG } from "qrcode.react"

interface QRCodeProps {
  url: string
}

export default function QRCode({ url }: QRCodeProps) {
  return (
    <div className="inline-block bg-white p-2 rounded-lg">
      <QRCodeSVG value={url} size={128} />
      <p className="mt-2 text-sm text-gray-600">Scan to visit my portfolio</p>
    </div>
  )
}

