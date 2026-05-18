import { useState } from 'react'

export default function RecruitForm() {

  const [formData, setFormData] = useState({
    nickname: '',
    playclass: '',
    discord: '',
    region: '',
    playstyle: '',
    experience: '',
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {

      const response = await fetch(
        'https://trpdemiranda07.app.n8n.cloud/webhook/aion2-recruit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )

      if (response.ok) {
        alert('Application sent successfully!')

        setFormData({
          nickname: '',
          playclass: '',
          discord: '',
          region: '',
          playstyle: '',
          experience: '',
        })
      } else {
        alert('Failed to send application')
      }

    } catch (error) {
      console.error(error)
      alert('Error sending application')
    }
  }

  return (
    <section className="w-full max-w-3xl bg-white/5 backdrop-blur-lg border border-cyan-500/20 rounded-3xl p-8 shadow-[0_0_40px_rgba(34,211,238,0.15)]">

      <h2 className="text-4xl font-black mb-8 text-center">
        Guild Recruitment
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5"
      >

        <input
          type="text"
          name="nickname"
          placeholder="Nickname"
          value={formData.nickname}
          onChange={handleChange}
          className="bg-black/40 border border-cyan-500/20 rounded-xl p-4 outline-none"
        />

        <select
          name="playclass"
          value={formData.playclass}
          onChange={handleChange}
          className="bg-black/40 border border-cyan-500/20 rounded-xl p-4 outline-none"
        >
          <option value="">Choose your class</option>
          <option>Gladiator</option>
          <option>Templar</option>
          <option>Ranger</option>
          <option>Assassin</option>
          <option>Sorcerer</option>
          <option>Cleric</option>
          <option>Spiritmaster</option>
          <option>Chanter</option>
        </select>

        <input
          type="text"
          name="discord"
          placeholder="Discord"
          value={formData.discord}
          onChange={handleChange}
          className="bg-black/40 border border-cyan-500/20 rounded-xl p-4 outline-none"
        />

        <select
          name="region"
          value={formData.region}
          onChange={handleChange}
          className="bg-black/40 border border-cyan-500/20 rounded-xl p-4 outline-none"
        >
          <option value="">Region</option>
          <option>NA</option>
          <option>SA</option>
          <option>EU</option>
        </select>

        <select
          name="playstyle"
          value={formData.playstyle}
          onChange={handleChange}
          className="bg-black/40 border border-cyan-500/20 rounded-xl p-4 outline-none"
        >
          <option value="">Playstyle</option>
          <option>PvP</option>
          <option>PvE</option>
          <option>Hardcore</option>
          <option>Casual</option>
        </select>

        <textarea
          name="experience"
          placeholder="Tell us about your MMO experience..."
          rows="5"
          value={formData.experience}
          onChange={handleChange}
          className="bg-black/40 border border-cyan-500/20 rounded-xl p-4 outline-none resize-none"
        />

        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-400 transition-all rounded-2xl py-4 text-xl font-bold shadow-[0_0_25px_rgba(34,211,238,0.5)]"
        >
          Send Application
        </button>

      </form>

    </section>
  )
}