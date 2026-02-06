"""
PDF 텍스트 추출 스크립트
성수동 임장 PDF에서 텍스트를 추출합니다.
"""

from pypdf import PdfReader
import os

def extract_pdf_text(pdf_path, output_path):
    """PDF에서 텍스트를 추출하여 마크다운 파일로 저장합니다."""
    
    print(f"PDF 파일 읽는 중: {pdf_path}")
    
    try:
        reader = PdfReader(pdf_path)
        total_pages = len(reader.pages)
        print(f"총 페이지 수: {total_pages}")
        
        all_text = []
        
        for i, page in enumerate(reader.pages):
            print(f"페이지 {i+1}/{total_pages} 추출 중...")
            text = page.extract_text()
            if text:
                all_text.append(f"## 페이지 {i+1}\n\n{text}\n")
            else:
                all_text.append(f"## 페이지 {i+1}\n\n(텍스트 추출 불가 - 이미지 페이지일 수 있음)\n")
        
        # 마크다운 파일로 저장
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write("# 성수동 임장 PDF 텍스트 추출본\n\n")
            f.write(f"> 원본 파일: {os.path.basename(pdf_path)}\n")
            f.write(f"> 총 페이지: {total_pages}페이지\n\n")
            f.write("---\n\n")
            f.write("\n\n---\n\n".join(all_text))
        
        print(f"\n✅ 추출 완료! 저장 위치: {output_path}")
        return True
        
    except Exception as e:
        print(f"❌ 오류 발생: {e}")
        return False

if __name__ == "__main__":
    pdf_path = r"D:\antigravity\RSA\seongsu-imjang\SUNGSUIMJANG0130compressed.pdf"
    output_path = r"D:\antigravity\RSA\seongsu-imjang\PDF_추출본.md"
    
    extract_pdf_text(pdf_path, output_path)
