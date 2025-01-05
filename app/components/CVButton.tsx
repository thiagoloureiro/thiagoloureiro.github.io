import { FileDown } from 'lucide-react'

export default function CVButton() {
  return (
    <a
      href="/Thiago_Loureiro_CV.pdf"
      download
      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
    >
      <FileDown className="w-5 h-5 mr-2" />
      Download CV
    </a>
  )
}

