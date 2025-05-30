import type { FC } from 'react';

const Home: FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header with logo */}
      <div className="bg-[#006cb5] py-0 px-0 overflow-hidden relative h-[120px]">
        {/* Diagonal overlay for right side */}
        <div className="absolute right-0 top-0 h-full w-[500px] bg-[#008037] transform" style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%)' }}></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex items-center py-2">
            <div className="flex items-start">
              <img src="/uit-logo.png" alt="UIT Logo" className="h-[70px] w-[70px]" />
              <div className="ml-3 text-white pt-1">
                <div className="text-[11px] uppercase font-semibold text-white leading-tight">ĐẠI HỌC QUỐC GIA THÀNH PHỐ HỒ CHÍ MINH</div>
                <div className="text-[11px] uppercase font-semibold text-white leading-tight">TRƯỜNG ĐẠI HỌC CÔNG NGHỆ THÔNG TIN</div>
                <div className="text-[26px] font-bold text-[#318ce3] mt-1 tracking-wide leading-tight">ĐÀO TẠO SAU ĐẠI HỌC</div>
              </div>
            </div>
            <div className="ml-auto relative z-10 mr-2">
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="Search this site..."
                  className="px-3 py-1 pr-8 rounded-full w-[160px] focus:outline-none border-0 text-xs"
                />
                <button className="absolute right-3 top-1.5">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex text-xs uppercase font-semibold">
            <a href="#" className="px-4 py-1.5 hover:bg-primary-active text-xs uppercase font-semibold">TRANG CHỦ</a>
            <a href="#" className="px-4 py-1.5 hover:bg-primary-active text-xs uppercase font-semibold">THÔNG BÁO</a>
            <a href="#" className="px-4 py-1.5 hover:bg-primary-active text-xs uppercase font-semibold">TUYỂN SINH</a>
            <a href="#" className="px-4 py-1.5 hover:bg-primary-active text-xs uppercase font-semibold">QUY CHẾ - QUY ĐỊNH</a>
            <a href="#" className="px-4 py-1.5 hover:bg-primary-active text-xs uppercase font-semibold">CHƯƠNG TRÌNH ĐÀO TẠO</a>
            <a href="#" className="px-4 py-1.5 hover:bg-primary-active text-xs uppercase font-semibold">KẾ HOẠCH ĐÀO TẠO</a>
            <a href="#" className="px-4 py-1.5 hover:bg-primary-active text-xs uppercase font-semibold">HỌC VIÊN</a>
            <a href="#" className="px-4 py-1.5 hover:bg-primary-active text-xs uppercase font-semibold">LIÊN HỆ</a>
          </div>
        </div>
      </nav>

      <main className="flex-grow py-3">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-3">
          {/* Left Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white border border-gray-200 p-3 mb-3">
              <h3 className="text-base font-bold mb-3 text-center border-b border-gray-200 pb-2 text-primary">ĐĂNG NHẬP</h3>
              <form className="space-y-3">
                <div>
                  <label className="block text-sm mb-1">Tên truy cập <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full px-2 py-1.5 border border-gray-200" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Mật khẩu <span className="text-red-500">*</span></label>
                  <input type="password" className="w-full px-2 py-1.5 border border-gray-200" />
                </div>
                <button className="w-full bg-primary text-white py-1.5 hover:bg-primary-dark text-sm">Đăng nhập</button>
              </form>
            </div>

            <div className="bg-white border border-gray-200 p-3">
              <h3 className="text-base font-bold mb-4 text-center text-primary border-b border-gray-200 pb-2">ĐÀO TẠO SAU ĐẠI HỌC</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-primary hover:text-primary-dark flex items-center text-sm"><span className="mr-2 text-xs">▶</span> Giới thiệu</a></li>
                <li><a href="#" className="text-primary hover:text-primary-dark flex items-center text-sm"><span className="mr-2 text-xs">▶</span> Biểu mẫu</a></li>
                <li><a href="#" className="text-primary hover:text-primary-dark flex items-center text-sm"><span className="mr-2 text-xs">▶</span> Học bổng</a></li>
                <li><a href="#" className="text-primary hover:text-primary-dark flex items-center text-sm"><span className="mr-2 text-xs">▶</span> Luận án tiến sĩ</a></li>
                <li><a href="#" className="text-primary hover:text-primary-dark flex items-center text-sm"><span className="mr-2 text-xs">▶</span> Luận văn cao học</a></li>
                <li><a href="#" className="text-primary hover:text-primary-dark flex items-center text-sm"><span className="mr-2 text-xs">▶</span> Đào tạo Thạc sĩ</a></li>
                <li><a href="#" className="text-primary hover:text-primary-dark flex items-center text-sm"><span className="mr-2 text-xs">▶</span> Hướng nghiên cứu của NCS</a></li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="bg-white border border-gray-300 p-4 mb-4">
              <h2 className="text-base font-bold text-primary mb-2 border-b border-gray-200 pb-2">TUYỂN SINH</h2>
              <div className="space-y-3">
                <div className="border-b border-gray-200 pb-3">
                  <a href="#" className="text-primary hover:text-primary-dark flex items-center text-sm">
                    <span className="mr-2 text-xs">▶</span>
                    THÔNG BÁO XÉT TUYỂN CHƯƠNG TRÌNH ĐÀO TẠO TRÌNH ĐỘ THẠC SĨ ĐỢT 1 NĂM 2025
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">- (26-02-2025)</p>
                </div>
                <div className="border-b border-gray-200 pb-3">
                  <a href="#" className="text-primary hover:text-primary-dark flex items-center text-sm">
                    <span className="mr-2 text-xs">▶</span>
                    Nhắc thời gian nộp hồ sơ dự tuyển trình độ thạc sĩ đợt 1 năm 2025
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">- (21-05-2025)</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-3">
              <h2 className="text-base font-bold text-primary mb-2 border-b border-gray-200 pb-2">THỜI KHÓA BIỂU & ĐIỂM THI</h2>
              <div className="space-y-3">
                <div className="border-b border-gray-200 pb-3">
                  <a href="#" className="text-primary hover:text-primary-dark flex items-center text-sm">
                    <span className="mr-2 text-xs">▶</span>
                    Thông báo điểm thi Toán cho KTMT
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">- (12-05-2025)</p>
                </div>
                <div className="border-b border-gray-200 pb-3">
                  <a href="#" className="text-primary hover:text-primary-dark flex items-center text-sm">
                    <span className="mr-2 text-xs">▶</span>
                    Thông báo điểm thi Môn Triết
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">- (09-05-2025)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white border border-gray-300 p-4 mb-4">
              <h2 className="text-base font-bold text-primary mb-2 border-b border-gray-200 pb-2">THÔNG BÁO NCS</h2>
              <div className="space-y-3">
                <div className="border-b border-gray-200 pb-3">
                  <a href="#" className="text-primary hover:text-primary-dark flex items-center text-sm">
                    <span className="mr-2 text-xs">▶</span>
                    Về việc tổ chức phiên họp Hội đồng đánh giá luận án tiến sĩ cấp Trường của NCS Trần Minh Tùng
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">- (16-05-2025)</p>
                </div>
                <div className="border-b border-gray-200 pb-3">
                  <a href="#" className="text-primary hover:text-primary-dark flex items-center text-sm">
                    <span className="mr-2 text-xs">▶</span>
                    Thư mời tham dự báo cáo học thuật lần 03 của NCS Thái Huy Tân
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">- (10-03-2025)</p>
                </div>
              </div>
              <div className="mt-3 text-right">
                <a href="#" className="text-primary hover:text-primary-dark text-sm font-medium">Xem thêm »</a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-3">
              <h2 className="text-base font-bold text-primary mb-2 border-b border-gray-200 pb-2">LIÊN KẾT</h2>
              <ul className="space-y-1">
                <li><a href="#" className="text-primary hover:text-primary-dark flex items-center text-sm"><span className="mr-2 text-xs">▶</span> Website Trường</a></li>
                <li><a href="#" className="text-primary hover:text-primary-dark flex items-center text-sm"><span className="mr-2 text-xs">▶</span> Forum Trường</a></li>
                <li><a href="#" className="text-primary hover:text-primary-dark flex items-center text-sm"><span className="mr-2 text-xs">▶</span> Website môn học (SĐH)</a></li>
                <li><a href="#" className="text-primary hover:text-primary-dark flex items-center text-sm"><span className="mr-2 text-xs">▶</span> Tra cứu văn bằng</a></li>
                <li><a href="#" className="text-primary hover:text-primary-dark flex items-center text-sm"><span className="mr-2 text-xs">▶</span> Trung tâm Ngoại ngữ</a></li>
                <li><a href="#" className="text-primary hover:text-primary-dark flex items-center text-sm"><span className="mr-2 text-xs">▶</span> Đề án sách</a></li>
                <li><a href="#" className="text-primary hover:text-primary-dark flex items-center text-sm"><span className="mr-2 text-xs">▶</span> Hình ảnh</a></li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-primary text-white py-4 mt-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-base font-bold mb-2">PHÒNG ĐTSĐH & KHCN</h3>
          <p className="mb-1 text-sm">Khu phố 6, P.Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí Minh.</p>
          <p className="mb-1 text-sm">Điện thoại: (08) 372 52002, Ext: 110  Fax: (08) 372 52148</p>
          <p className="text-sm">Email: dtsdh@uit.edu.vn</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
