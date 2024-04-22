import { ref, computed } from 'vue'

export default function useCounter() {
    const downloadPdf = (pdfUrl: string) => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.target = '_blank';
        link.download = 'Resume_MicaelaPremat.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
  
  return {
    downloadPdf,    
  }
}