import type { FC } from 'react';

const Home: FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header with logo */}
      {/* Header with diagonal cut from blue to green */}
      <div className="relative overflow-hidden h-[70px]">
        {/* Blue background */}
        <div className="absolute inset-0 bg-[#f0f2f3]"></div>
        {/* Green overlay with diagonal cut */}
        <div className="absolute right-0 top-0 h-full w-[55%] bg-[#008037]" style={{ clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>
        {/* Content */}
        <div className="relative h-full mx-auto px-2 py-1.5 flex items-center">
          <div className="flex items-center">
            <div className="bg-white p-1 rounded">
              <img src="/uit-logo.png" alt="UIT Logo" className="h-[45px] w-[45px]" />
            </div>
            <div className="ml-2 text-blue-900">
              <div className="text-[8px] uppercase font-medium leading-tight tracking-tight">ĐẠI HỌC QUỐC GIA THÀNH PHỐ HỒ CHÍ MINH</div>
              <div className="text-[8px] uppercase font-medium leading-tight tracking-tight">TRƯỜNG ĐẠI HỌC CÔNG NGHỆ THÔNG TIN</div>
              <div className="text-[20px] font-bold tracking-tight leading-tight">ĐÀO TẠO SAU ĐẠI HỌC</div>
            </div>
          </div>
          <div className="ml-auto relative z-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search this site..."
                className="px-2 py-0.5 pr-8 rounded-full w-[130px] focus:outline-none border-0 text-[10px]"
              />
              <button className="absolute right-2 top-1">
                <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-[#008037] text-white h-[22px] flex items-center">
        <div className="w-full px-1">
          <div className="flex justify-between text-[9px] uppercase font-normal">
            <a href="#" className="px-2 py-0.5 hover:bg-[#006c2f] text-[9px] uppercase">TRANG CHỦ</a>
            <a href="#" className="px-2 py-0.5 hover:bg-[#006c2f] text-[9px] uppercase">THÔNG BÁO</a>
            <a href="#" className="px-2 py-0.5 hover:bg-[#006c2f] text-[9px] uppercase">TUYỂN SINH</a>
            <a href="#" className="px-2 py-0.5 hover:bg-[#006c2f] text-[9px] uppercase">QUY CHẾ - QUY ĐỊNH</a>
            <a href="#" className="px-2 py-0.5 hover:bg-[#006c2f] text-[9px] uppercase">CHƯƠNG TRÌNH ĐÀO TẠO</a>
            <a href="#" className="px-2 py-0.5 hover:bg-[#006c2f] text-[9px] uppercase">KẾ HOẠCH ĐÀO TẠO</a>
            <a href="#" className="px-2 py-0.5 hover:bg-[#006c2f] text-[9px] uppercase">HỌC VIÊN</a>
            <a href="#" className="px-2 py-0.5 hover:bg-[#006c2f] text-[9px] uppercase">LIÊN HỆ</a>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-grow py-1.5">
        <div className="max-w-7xl mx-auto px-1.5 grid md:grid-cols-4 gap-1.5">
          {/* Left Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white border border-gray-200 p-2 mb-2">
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

            <div className="bg-white border border-gray-200 p-2">
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
            <div className="bg-white border border-gray-200 p-2 mb-2">
              <h2 className="text-base font-bold text-primary mb-2 border-b border-gray-200 pb-2">TUYỂN SINH</h2>
              <div className="space-y-3">
                <div className="border-b border-gray-200 pb-2">
                  <a href="#" className="text-primary hover:text-primary-dark flex items-center text-sm">
                    <span className="mr-2 text-xs">▶</span>
                    THÔNG BÁO XÉT TUYỂN CHƯƠNG TRÌNH ĐÀO TẠO TRÌNH ĐỘ THẠC SĨ ĐỢT 1 NĂM 2025
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">- (26-02-2025)</p>
                </div>
                <div className="border-b border-gray-200 pb-2">
                  <a href="#" className="text-primary hover:text-primary-dark flex items-center text-sm">
                    <span className="mr-2 text-xs">▶</span>
                    Nhắc thời gian nộp hồ sơ dự tuyển trình độ thạc sĩ đợt 1 năm 2025
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">- (21-05-2025)</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-2">
              <h2 className="text-base font-bold text-primary mb-2 border-b border-gray-200 pb-2">THỜI KHÓA BIỂU & ĐIỂM THI</h2>
              <div className="space-y-3">
                <div className="border-b border-gray-200 pb-2">
                  <a href="#" className="text-primary hover:text-primary-dark flex items-center text-sm">
                    <span className="mr-2 text-xs">▶</span>
                    Thông báo điểm thi Toán cho KTMT
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">- (12-05-2025)</p>
                </div>
                <div className="border-b border-gray-200 pb-2">
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
            <div className="bg-white border border-gray-200 p-2 mb-2">
              <h2 className="text-base font-bold text-primary mb-2 border-b border-gray-200 pb-2">THÔNG BÁO NCS</h2>
              <div className="space-y-3">
                <div className="border-b border-gray-200 pb-2">
                  <a href="#" className="text-primary hover:text-primary-dark flex items-center text-sm">
                    <span className="mr-2 text-xs">▶</span>
                    Về việc tổ chức phiên họp Hội đồng đánh giá luận án tiến sĩ cấp Trường của NCS Trần Minh Tùng
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">- (16-05-2025)</p>
                </div>
                <div className="border-b border-gray-200 pb-2">
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

            <div className="bg-white border border-gray-200 p-2">
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

      <footer className="bg-[#008037] text-white py-4 mt-2">
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
