import type { FC } from 'react';

const Home: FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header with logo */}
      {/* Header with diagonal cut from blue to green */}
      <div className="relative overflow-hidden h-[90px] border-b border-gray-200">
        {/* White background */}
        <div className="absolute inset-0 bg-white"></div>
        {/* Green right side with diagonal cut */}
        <div className="absolute right-0 top-0 h-full w-[55%] bg-[#008037]" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>
        {/* Content */}
        <div className="relative h-full container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-white p-2 rounded-md shadow-md border border-gray-100">
              <img src="/uit-logo.png" alt="UIT Logo" className="h-[65px] w-[65px]" />
            </div>
            <div className="ml-4 z-10">
              <div className="text-sm uppercase font-medium leading-tight tracking-tight text-[#0066b3]">ĐẠI HỌC QUỐC GIA THÀNH PHỐ HỒ CHÍ MINH</div>
              <div className="text-sm uppercase font-medium leading-tight tracking-tight text-[#0066b3]">TRƯỜNG ĐẠI HỌC CÔNG NGHỆ THÔNG TIN</div>
              <div className="text-3xl font-bold tracking-tight leading-tight text-[#2B82D4] mt-1">ĐÀO TẠO SAU ĐẠI HỌC</div>
            </div>
          </div>
          <div className="ml-auto relative z-10">
            <div className="relative rounded-md flex border border-gray-300 shadow-md">
              <input type="text" className="w-48 py-2 px-3 outline-none text-black text-sm rounded-l-md" placeholder="Tìm kiếm..." />
              <button className="bg-[#0066b3] text-white px-4 py-2 rounded-r-md hover:bg-[#005599]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-[#008037] text-white h-[35px] flex items-center border-y border-[#009945]/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between uppercase font-medium">
            <a href="#" className="px-4 py-1.5 hover:bg-[#006c2f] text-sm uppercase font-medium">TRANG CHỦ</a>
            <a href="#" className="px-4 py-1.5 hover:bg-[#006c2f] text-sm uppercase font-medium">THÔNG BÁO</a>
            <a href="#" className="px-4 py-1.5 hover:bg-[#006c2f] text-sm uppercase font-medium">TUYỂN SINH</a>
            <a href="#" className="px-4 py-1.5 hover:bg-[#006c2f] text-sm uppercase font-medium">QUY CHẾ - QUY ĐỊNH</a>
            <a href="#" className="px-4 py-1.5 hover:bg-[#006c2f] text-sm uppercase font-medium">CHƯƠNG TRÌNH ĐÀO TẠO</a>
            <a href="#" className="px-4 py-1.5 hover:bg-[#006c2f] text-sm uppercase font-medium">KẾ HOẠCH ĐÀO TẠO</a>
            <a href="#" className="px-4 py-1.5 hover:bg-[#006c2f] text-sm uppercase font-medium">HỌC VIÊN</a>
            <a href="#" className="px-4 py-1.5 hover:bg-[#006c2f] text-sm uppercase font-medium">LIÊN HỆ</a>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-grow py-4 bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-4">
          {/* Left Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white border border-gray-200 p-3 mb-3">
              <h3 className="text-lg font-bold mb-3 text-center border-b border-gray-200 pb-2 text-primary">ĐĂNG NHẬP</h3>
              <form className="space-y-3">
                <div>
                  <label className="block text-base mb-1">Tên truy cập <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-200 text-base" />
                </div>
                <div>
                  <label className="block text-base mb-1">Mật khẩu <span className="text-red-500">*</span></label>
                  <input type="password" className="w-full px-3 py-2 border border-gray-200 text-base" />
                </div>
                <button className="w-full bg-primary text-white py-2 hover:bg-primary-dark text-base rounded">Đăng nhập</button>
              </form>
            </div>

            <div className="bg-white border border-gray-200 p-3">
              <h3 className="text-lg font-bold mb-3 text-center text-primary border-b border-gray-200 pb-2">ĐÀO TẠO SAU ĐẠI HỌC</h3>
              <ul className="space-y-2 mt-2">
                <li><a href="#" className="text-primary hover:text-primary-dark flex items-center text-base"><span className="mr-2 text-sm">▶</span> Giới thiệu</a></li>
                <li><a href="#" className="text-primary hover:text-primary-dark flex items-center text-base"><span className="mr-2 text-sm">▶</span> Biểu mẫu</a></li>
                <li><a href="#" className="text-primary hover:text-primary-dark flex items-center text-base"><span className="mr-2 text-sm">▶</span> Học bổng</a></li>
                <li><a href="#" className="text-primary hover:text-primary-dark flex items-center text-base"><span className="mr-2 text-sm">▶</span> Luận án tiến sĩ</a></li>
                <li><a href="#" className="text-primary hover:text-primary-dark flex items-center text-base"><span className="mr-2 text-sm">▶</span> Luận văn cao học</a></li>
                <li><a href="#" className="text-primary hover:text-primary-dark flex items-center text-base"><span className="mr-2 text-sm">▶</span> Đào tạo Thạc sĩ</a></li>
                <li><a href="#" className="text-primary hover:text-primary-dark flex items-center text-base"><span className="mr-2 text-sm">▶</span> Hướng nghiên cứu của NCS</a></li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="bg-white border border-gray-200 p-3 mb-3">
              <h2 className="text-lg font-bold text-primary mb-3 border-b border-gray-200 pb-2">TUYỂN SINH</h2>
              <div className="space-y-3">
                <div className="border-b border-gray-200 pb-3 pt-1 hover:bg-gray-50">
                  <a href="#" className="text-primary hover:text-primary-dark flex items-center text-lg">
                    <span className="mr-2 text-sm">▶</span>
                    THÔNG BÁO XÉT TUYỂN CHƯƠNG TRÌNH ĐÀO TẠO TRÌNH ĐỘ THẠC SĨ ĐỢT 1 NĂM 2025
                  </a>
                  <p className="text-sm text-gray-500 mt-0.5">- (26-02-2025)</p>
                </div>
                <div className="border-b border-gray-200 pb-3 pt-1 hover:bg-gray-50">
                  <a href="#" className="text-primary hover:text-primary-dark flex items-center text-lg">
                    <span className="mr-2 text-sm">▶</span>
                    Nhắc thời gian nộp hồ sơ dự tuyển trình độ thạc sĩ đợt 1 năm 2025
                  </a>
                  <p className="text-sm text-gray-500 mt-0.5">- (21-05-2025)</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-3">
              <h2 className="text-lg font-bold text-primary mb-3 border-b border-gray-200 pb-2">THỜI KHÓA BIỂU & ĐIỂM THI</h2>
              <div className="space-y-3">
                <div className="border-b border-gray-200 pb-3 pt-1 hover:bg-gray-50">
                  <a href="#" className="text-primary hover:text-primary-dark flex items-center text-lg">
                    <span className="mr-2 text-sm">▶</span>
                    Thông báo điểm thi Toán cho KTMT
                  </a>
                  <p className="text-sm text-gray-500 mt-0.5">- (12-05-2025)</p>
                </div>
                <div className="border-b border-gray-200 pb-3 pt-1 hover:bg-gray-50">
                  <a href="#" className="text-primary hover:text-primary-dark flex items-center text-lg">
                    <span className="mr-2 text-sm">▶</span>
                    Thông báo điểm thi Môn Triết
                  </a>
                  <p className="text-sm text-gray-500 mt-0.5">- (09-05-2025)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white border border-gray-200 p-3 mb-3">
              <h2 className="text-lg font-bold text-primary mb-3 border-b border-gray-200 pb-2">THÔNG BÁO NCS</h2>
              <div className="space-y-3">
                <div className="border-b border-gray-200 pb-3 pt-1 hover:bg-gray-50">
                  <a href="#" className="text-primary hover:text-primary-dark flex items-center text-lg">
                    <span className="mr-2 text-sm">▶</span>
                    Về việc tổ chức phiên họp Hội đồng đánh giá luận án tiến sĩ cấp Trường của NCS Trần Minh Tùng
                  </a>
                  <p className="text-sm text-gray-500 mt-0.5">- (16-05-2025)</p>
                </div>
                <div className="border-b border-gray-200 pb-3 pt-1 hover:bg-gray-50">
                  <a href="#" className="text-primary hover:text-primary-dark flex items-center text-base">
                    <span className="mr-2 text-sm">▶</span>
                    Thư mời tham dự báo cáo học thuật lần 03 của NCS Thái Huy Tân
                  </a>
                  <p className="text-sm text-gray-500 mt-0.5">- (10-03-2025)</p>
                </div>
              </div>
              <div className="mt-3 text-right">
                <a href="#" className="text-primary hover:text-primary-dark text-base font-semibold">Xem thêm »</a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-3">
              <h2 className="text-lg font-bold text-primary mb-3 border-b border-gray-200 pb-2">LIÊN KẾT</h2>
              <ul className="space-y-2 mt-2">
                <li><a href="#" className="text-primary hover:text-primary-dark flex items-center text-base"><span className="mr-2 text-sm">▶</span> Website Trường</a></li>
                <li><a href="#" className="text-primary hover:text-primary-dark flex items-center text-base"><span className="mr-2 text-sm">▶</span> Forum Trường</a></li>
                <li><a href="#" className="text-primary hover:text-primary-dark flex items-center text-base"><span className="mr-2 text-sm">▶</span> Website môn học (SĐH)</a></li>
                <li><a href="#" className="text-primary hover:text-primary-dark flex items-center text-base"><span className="mr-2 text-sm">▶</span> Tra cứu văn bằng</a></li>
                <li><a href="#" className="text-primary hover:text-primary-dark flex items-center text-base"><span className="mr-2 text-sm">▶</span> Trung tâm Ngoại ngữ</a></li>
                <li><a href="#" className="text-primary hover:text-primary-dark flex items-center text-base"><span className="mr-2 text-sm">▶</span> Đề án sách</a></li>
                <li><a href="#" className="text-primary hover:text-primary-dark flex items-center text-base"><span className="mr-2 text-sm">▶</span> Hình ảnh</a></li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#008037] text-white py-4 mt-4 border-t border-[#009945]/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-lg font-bold mb-3">PHÒNG ĐTSĐH & KHCN</h3>
          <p className="mb-2 text-base">Khu phố 6, P.Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí Minh.</p>
          <p className="mb-2 text-base">Điện thoại: (08) 372 52002, Ext: 110  Fax: (08) 372 52148</p>
          <p className="text-base">Email: dtsdh@uit.edu.vn</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
