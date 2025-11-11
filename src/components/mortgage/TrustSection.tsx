import { Shield, Users, TrendingUp } from "lucide-react";

export default function TrustSection() {
  const benefits = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "מעל 5 שנים של ניסיון ייעוצי",
      description:
        "הצלנו לקוחות במצבי חילוץ קיצוניים וסייענו לאלפי משפחות למצוא את הפתרון הנכון",
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "ייעוץ 1 על 1 וליווי צמוד",
      description:
        "אתם הלקוח היחיד בחדר, לא מספר במערכת. ליווי אישי מקצועי לכל אורך התהליך",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "מומחיות מוכחת באישור משכנתאות",
      description:
        "אישרנו משכנתאות במקרים שהבנק כבר אמר 'לא'. הניסיון שלנו עושה את ההבדל",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary/5 via-primary/8 to-primary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            למה לבחור בנו?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            אנחנו לא רק יועצי משכנתאות - אנחנו השותפים שלכם להצלחה פיננסית
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-background p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="mb-6 p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Savings Numbers */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary rounded-3xl text-center shadow-2xl p-10 md:p-12">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary-foreground">
              חסכנו ללקוחותינו בממוצע
            </h3>
            <div className="mb-6">
              <p className="text-5xl md:text-6xl font-bold mb-2 text-primary-foreground">
                80,000 ₪ עד 150,000 ₪
              </p>
            </div>
            <p className="text-lg md:text-xl opacity-95 text-primary-foreground max-w-2xl mx-auto">
              לאורך חיי המשכנתא - זה ההבדל בין ייעוץ מקצועי לבין בחירה אקראית
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

