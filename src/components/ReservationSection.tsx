import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, Users, Phone, Car, MessageCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { DRINK_PACKAGES, CONTACT_INFO } from '../data/mockData';
import { ReservationData } from '../types';

interface ReservationSectionProps {
  initialPackage?: string;
  initialEstimate?: any;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ initialPackage }) => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '21:00',
    headcount: 1,
    selectedPackage: initialPackage || 'whisky-standard',
    needsPickup: false,
    pickupLocation: '',
    stylePreference: '편안하고 센스 있는 대화형',
    notes: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [refCode, setRefCode] = useState<string>('');

  const timeOptions = [
    '20:00 (오픈)', '20:30', '21:00', '21:30', '22:00', '22:30',
    '23:00', '23:30', '00:00 (자정)', '01:00', '02:00', '03:00', '04:00'
  ];

  const styleOptions = [
    '편안하고 센스 있는 대화형 (추천)',
    '비주얼 & 아이돌 / 모델 스타일',
    '유쾌하고 텐션 넘치는 파티형',
    '듬직하고 매너 좋은 힐링형',
    '취향 맞춤 (방문 후 추천)'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone) {
      alert('연락처(전화번호)를 입력해 주세요.');
      return;
    }

    const generatedCode = 'W-' + Math.floor(100000 + Math.random() * 900000);
    setRefCode(generatedCode);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  // SMS link prefill
  const smsBody = encodeURIComponent(
    `[건대W 예약문의]\n성함/닉네임: ${formData.name || '고객님'}\n연락처: ${formData.phone}\n방문일시: ${formData.date} ${formData.time}\n인원: ${formData.headcount}명\n주류: ${formData.selectedPackage}\n픽업필요: ${formData.needsPickup ? `예 (${formData.pickupLocation || '위치 미정'})` : '아니오'}\n선호스타일: ${formData.stylePreference}\n요청사항: ${formData.notes || '없음'}`
  );

  return (
    <section id="reservation" className="py-24 bg-[#0c0c10] relative border-t border-zinc-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>24H REAL-TIME VIP BOOKING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            실시간 <span className="text-amber-400">예약 & 픽업 신청</span>
          </h2>
          <p className="text-zinc-400 text-sm mt-3">
            신청 즉시 전담 실장이 배정되어 프라이빗 룸 확보 및 픽업 차량을 준비해 드립니다. <br className="hidden sm:inline" />
            성함 대신 닉네임이나 이니셜로도 편하게 예약하실 수 있습니다.
          </p>
        </div>

        {submitted ? (
          <div className="bg-zinc-900 border-2 border-amber-500/60 rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              예약 접수 번호 : {refCode}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-3">
              예약 접수가 정상 완료되었습니다!
            </h3>
            <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
              입력해 주신 연락처(<span className="text-amber-300 font-semibold">{formData.phone}</span>)로
              담당 지점장이 5~10분 내로 친절하고 조용한 문자 또는 전화로 예약 확정 안내를 드립니다.
            </p>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-left text-xs text-zinc-300 space-y-2 mb-8">
              <div className="flex justify-between">
                <span className="text-zinc-500">방문 일시 :</span>
                <span className="font-semibold text-white">{formData.date} {formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">인원수 :</span>
                <span className="font-semibold text-white">{formData.headcount}인</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">픽업 서비스 :</span>
                <span className="font-semibold text-white">
                  {formData.needsPickup ? `희망 (${formData.pickupLocation || '위치 미기재'})` : '자진 방문'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">선호 스타일 :</span>
                <span className="font-semibold text-amber-400">{formData.stylePreference}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`sms:${CONTACT_INFO.phone}?body=${smsBody}`}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>문자로 즉시 예약 내용 전송하기</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center space-x-1.5"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>지점장 직통 전화 연결</span>
              </a>
              <button
                onClick={handleReset}
                className="px-4 py-3 rounded-xl text-zinc-400 hover:text-white text-xs"
              >
                새로 작성하기
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name / Nickname */}
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-2">
                  성함 또는 닉네임 <span className="text-zinc-500 font-normal">(가명/이니셜 가능)</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="예: 제이 / 지민 / 예은"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-2">
                  연락처 (전화번호) <span className="text-amber-400">*필수</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="010-0000-0000"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Date */}
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-2 flex items-center">
                  <Calendar className="w-3.5 h-3.5 text-amber-400 mr-1.5" />
                  방문 희망 날짜
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              {/* Time */}
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-2 flex items-center">
                  <Clock className="w-3.5 h-3.5 text-amber-400 mr-1.5" />
                  방문 시간
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                >
                  {timeOptions.map((t) => (
                    <option key={t} value={t} className="bg-zinc-900 text-white">
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Headcount */}
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-2 flex items-center">
                  <Users className="w-3.5 h-3.5 text-amber-400 mr-1.5" />
                  방문 인원수
                </label>
                <select
                  value={formData.headcount}
                  onChange={(e) => setFormData({ ...formData, headcount: Number(e.target.value) })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                >
                  <option value={1}>1인 혼술 (조용한 룸)</option>
                  <option value={2}>2인 (친구/지인)</option>
                  <option value={3}>3인 (모임)</option>
                  <option value={4}>4인 (파티룸)</option>
                  <option value={5}>5인 이상 (VIP 단체)</option>
                </select>
              </div>
            </div>

            {/* Selected Package & Host Style Preference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-2">
                  희망 주류 (현장 변경 가능)
                </label>
                <select
                  value={formData.selectedPackage}
                  onChange={(e) => setFormData({ ...formData, selectedPackage: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                >
                  <option value="whisky-standard" className="bg-zinc-900 text-white">
                    스탠다드 위스키 세트
                  </option>
                  <option value="whisky-premium" className="bg-zinc-900 text-white">
                    프리미엄 17년산 위스키 세트
                  </option>
                  <option value="champagne" className="bg-zinc-900 text-white">
                    샴페인 & 파티 패키지
                  </option>
                  <option value="undecided" className="bg-zinc-900 text-white">
                    방문 후 메뉴판 보고 결정 (추천)
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-2">
                  선호하는 파트너 스타일
                </label>
                <select
                  value={formData.stylePreference}
                  onChange={(e) => setFormData({ ...formData, stylePreference: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                >
                  {styleOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-zinc-900 text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Pickup service toggle */}
            <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.needsPickup}
                  onChange={(e) => setFormData({ ...formData, needsPickup: e.target.checked })}
                  className="w-4 h-4 rounded border-zinc-700 text-amber-500 focus:ring-amber-400"
                />
                <span className="text-xs sm:text-sm font-bold text-white flex items-center">
                  <Car className="w-4 h-4 text-amber-400 mr-1.5" />
                  서울 전지역 고급 세단 무료 픽업 신청하기
                </span>
              </label>

              {formData.needsPickup && (
                <div className="pt-2">
                  <input
                    type="text"
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    placeholder="픽업 출발 희망 위치 (예: 강남역 11번 출구, 잠실 롯데 앞, 성수동 카페거리 등)"
                    className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                  />
                  <span className="text-[11px] text-amber-400/90 mt-1 block">
                    * 출발 30분 전 기사님이 위치 확인 전화를 드립니다.
                  </span>
                </div>
              )}
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-2">
                기타 요청사항 <span className="text-zinc-500 font-normal">(생일 이벤트, 특정 위스키 요청 등)</span>
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="추가로 전달하고 싶으신 내용이 있으시면 편하게 적어주세요."
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            {/* Privacy notice and submit */}
            <div className="pt-4 border-t border-zinc-800 space-y-4">
              <div className="flex items-center text-[11px] text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-amber-400 mr-1.5 shrink-0" />
                <span>
                  고객님의 정보는 예약 안내 및 픽업 목적 외에 절대 저장되거나 유출되지 않으며, 철저한 비밀이 보장됩니다.
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 font-bold text-sm sm:text-base shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 fill-current" />
                  <span>실시간 프라이빗 예약 신청하기</span>
                </button>

                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="px-6 py-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-100 font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center space-x-1.5"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>전화로 즉시 예약</span>
                </a>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
