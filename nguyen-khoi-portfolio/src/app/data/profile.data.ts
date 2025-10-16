export interface ProfileData {
  name: string;
  title: string;
  description: string;
  image: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  social: {
    github?: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
  about: {
    education: string;
    family: string;
    personality: string[];
    interests: string[];
  };
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  videos?: Video[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
}

export interface Video {
  title: string;
  description: string;
  type: 'youtube' | 'vimeo' | 'file';
  url: string;
  thumbnail?: string;
}

export const PROFILE_DATA: ProfileData = {
  name: 'Nguyễn Nguyên Khôi',
  title: 'Sinh viên Marketing - FPT University',
  description: 'Con nhà giàu có, đẹp trai nhưng xấu cái mặt, não để trồng cây',
  image: 'assets/images/IMG_8390.PNG',
  contact: {
    email: 'nguyen.khoi@fpt.edu.vn',
    phone: '0335097209',
    location: '124 Minh Khai, Hà Nội',
  },
  social: {
    facebook: 'https://facebook.com/nguyenkhoi.nguyen.3551',
    instagram: 'https://www.instagram.com/khoibeso2009/',
    github: '#',
    linkedin: '#',
  },
  about: {
    education: 'Đang học tại FPT University - Ngành Marketing',
    family: 'Sinh ra trong gia đình giàu có, được ba mẹ cưng chiều từ nhỏ',
    personality: [
      'Bệnh hoạn theo cách riêng của Khôi',
      'Nhìn đẹp trai nhưng xấu mỗi cái mặt',
      'Học thì không được thông minh lắm',
      'Não để trồng cây, đầu để làm đẹp',
    ],
    interests: [
      'Xem gái xinh trên mạng xã hội',
      'Chuyên gia nghiên cứu gái gú',
      'Đập lọ 10 lần mỗi ngày',
      'Ngủ và ăn',
    ],
  },
  experience: [
    {
      title: 'Chuyên gia xem gái',
      company: 'Freelance',
      period: '2020 - Hiện tại',
      description: 'Nghiên cứu và phân tích hình ảnh gái xinh trên các nền tảng mạng xã hội',
      achievements: [
        'Follow được 1000+ tài khoản gái xinh',
        'Like trung bình 500 ảnh mỗi ngày',
        'Chuyên gia đánh giá nhan sắc',
      ],
    },
    {
      title: 'Vận động viên đập lọ',
      company: 'Cá nhân',
      period: '2018 - Hiện tại',
      description: 'Duy trì thói quen đập lọ đều đặn mỗi ngày',
      achievements: ['Kỷ lục 10 lần/ngày', 'Không bỏ lỡ ngày nào', 'Chuyên nghiệp và kỷ luật'],
    },
    {
      title: 'Sinh viên Marketing',
      company: 'FPT University',
      period: '2022 - 2026',
      description: 'Học Marketing nhưng chủ yếu là ngủ và xem gái trong giờ học',
      achievements: [
        'Trốn học thành thạo',
        'Copy bài thuyết trình siêu đẳng',
        'Qua môn bằng may mắn',
      ],
    },
  ],
  skills: [
    {
      category: 'Kỹ năng mềm',
      items: ['Xem gái', 'Đập lọ', 'Ngủ', 'Ăn', 'Chơi game'],
    },
    {
      category: 'Kỹ năng học tập',
      items: ['Copy slide', 'Trốn học', 'Qua môn may mắn', 'Chat GPT'],
    },
    {
      category: 'Kỹ năng xã hội',
      items: ['Follow gái', 'Like ảnh', 'Nhắn tin tán gái', 'Bị block'],
    },
    {
      category: 'Kỹ năng Marketing (không có)',
      items: ['Không biết làm content', 'Không biết chạy ads', 'Chỉ biết Ctrl+C Ctrl+V'],
    },
  ],
  projects: [
    {
      name: 'Bộ sưu tập ảnh gái xinh',
      description: 'Thu thập và phân loại hơn 10,000 ảnh gái xinh từ nhiều nguồn khác nhau',
      technologies: ['Instagram', 'Facebook', 'TikTok', 'Threads'],
      image: 'assets/images/project1.jpg',
    },
    {
      name: 'Nghiên cứu thói quen đập lọ',
      description: 'Nghiên cứu và tối ưu hóa quy trình đập lọ hiệu quả nhất',
      technologies: ['Tay phải', 'Tay trái', 'Cả hai tay'],
      image: 'assets/images/project2.jpg',
    },
    {
      name: 'Hệ thống trốn học tự động',
      description: 'Phát triển các chiến lược trốn học không bị phát hiện',
      technologies: ['Xin phép', 'Giả bệnh', 'Ngủ quên'],
      image: 'assets/images/project3.jpg',
    },
  ],
  videos: [
    {
      title: 'Video của Khôi',
      description: 'Giới thiệu về Nguyễn Nguyên Khôi',
      type: 'file',
      url: 'assets/video/khoi-video.mov',
    },
  ],
};
