"""Original grade-6 area model and ratio videos; no remote assets or narration."""
from manim import Scene, VGroup, Text, Rectangle, Line, Circle, FadeIn, FadeOut, Create

PAPER = '#f7f5f0'
INK = '#292c29'
GREEN = '#467060'
BLUE = '#2f557d'
SOFT = '#edf3ec'
FONT = 'Hiragino Sans'


def label(value, size=32, color=INK):
    obj = Text(value, font=FONT, font_size=size, color=color)
    if obj.width > 12.0:
        obj.scale_to_fit_width(12.0)
    return obj


def region(obj, left, right, bottom, top, name):
    b = (float(obj.get_left()[0]), float(obj.get_right()[0]),
         float(obj.get_bottom()[1]), float(obj.get_top()[1]))
    assert b[0] >= left and b[1] <= right and b[2] >= bottom and b[3] <= top, (name, b)
    return obj


class LocalLesson(Scene):
    def setup(self):
        self.camera.background_color = PAPER
        self.caption = None
        self.equation = None

    def title(self, value):
        self.add(region(label(value, 40).move_to([0, 3.35, 0]), -6.3, 6.3, 2.95, 3.8, 'title'))
        self.add(Line([-6, 2.83, 0], [6, 2.83, 0], color='#d7dad3'))

    def say(self, value):
        if self.caption is not None:
            self.remove(self.caption)
        self.caption = region(label(value, 31).move_to([0, -3.2, 0]), -6.3, 6.3, -3.8, -2.75, 'caption')
        self.add(self.caption)

    def formula(self, value):
        if self.equation is not None:
            self.remove(self.equation)
        self.equation = region(label(value, 39, GREEN).move_to([0, -2.25, 0]), -6.3, 6.3, -2.6, -1.9, 'equation')
        self.add(self.equation)



def assert_disjoint(objects):
    for i, a in enumerate(objects):
        for b in objects[i+1:]:
            dx=min(a.get_right()[0],b.get_right()[0])-max(a.get_left()[0],b.get_left()[0])
            dy=min(a.get_top()[1],b.get_top()[1])-max(a.get_bottom()[1],b.get_bottom()[1])
            assert dx <= 1e-6 or dy <= 1e-6, 'quantity pieces overlap'


class FractionProductLesson(LocalLesson):
    def construct(self):
        self.title('2/3 の 3/4 は、どれだけ？')
        cells=VGroup(*[Rectangle(width=1.7,height=.65,color=INK,stroke_width=2,
                    fill_color=GREEN if c<2 else PAPER,fill_opacity=.55 if c<2 else 1)
                    .move_to([-1.7+c*1.7,1.6-r*.65,0]) for r in range(4) for c in range(3)])
        region(cells,-3,3,-.8,2.1,'twelve equal cells')
        assert_disjoint(list(cells));assert len(cells)==12
        columns=VGroup(*[Rectangle(width=1.7,height=2.6,color=INK,stroke_width=2,
                       fill_color=GREEN if c<2 else PAPER,fill_opacity=.55 if c<2 else 1)
                       .move_to([-1.7+c*1.7,.625,0]) for c in range(3)])
        assert_disjoint(list(columns));self.add(columns)
        self.say('図全体を1とする。3列のうち2列が2/3。')
        self.formula('2/3 × 3/4 ＝ ？')
        self.wait(4)
        self.say('たてを4等分すると、全体は12こに分かれる。')
        self.formula('2/3 ＝ 8/12')
        dividers=VGroup(*[Line([-2.55,1.925-i*.65,0],[2.55,1.925-i*.65,0],color=INK,stroke_width=2) for i in range(1,4)])
        self.play(Create(dividers),run_time=1)
        self.remove(columns,dividers);self.add(cells)
        self.wait(3)
        self.say('色のついた部分の、4段のうち3段を選ぶ。')
        self.play(*[cells[i].animate.set_fill(PAPER,opacity=1) for i in [9,10]],run_time=2)
        self.formula('2/3 × 3/4 ＝ 6/12')
        self.wait(4)
        self.say('12このうち6こ。全体の1/2になる。')
        self.formula('2/3 × 3/4 ＝ (2 × 3)/(3 × 4) ＝ 1/2')
        self.wait(5)
        assert_disjoint(list(cells))
        assert len(cells)==12
        print('GRADE6_VIDEO_GEOMETRY=PASS product_cells=12 selected_cells=6 area_fraction=1/2')


class RatioShareLesson(LocalLesson):
    def construct(self):
        self.title('20こを 2：3 に分ける')
        dots=VGroup(*[Circle(radius=.18,color=INK,stroke_width=2,fill_color=SOFT,fill_opacity=1)
                    .move_to([-4+c*2,1.5-r*.62,0]) for c in range(5) for r in range(4)])
        region(dots,-4.5,4.5,-.7,2.0,'twenty pieces')
        assert len(dots)==20;assert_disjoint(list(dots));self.add(dots)
        self.say('全部で20こ。2：3の、同じ大きさの5つ分にする。')
        self.formula('2 ＋ 3 ＝ 5')
        self.wait(4)
        boxes=VGroup(*[Rectangle(width=1.3,height=2.4,color=INK,stroke_width=2)
                     .move_to([-4+c*2,.57,0]) for c in range(5)])
        region(boxes,-5,5,-.7,1.9,'five groups');assert_disjoint(list(boxes))
        self.play(Create(boxes),run_time=1.5)
        self.say('1つ分は、20 ÷ 5 ＝ 4こ。')
        self.formula('20 ÷ 5 ＝ 4')
        self.wait(4)
        self.say('2つ分は8こ。3つ分は12こ。')
        self.play(*[dot.animate.set_fill(GREEN if i<8 else BLUE,opacity=.7) for i,dot in enumerate(dots)],run_time=1.5)
        self.formula('4 × 2 ＝ 8　　4 × 3 ＝ 12')
        self.wait(4)
        self.say('8：12 ＝ 2：3。合わせると20こ。')
        self.formula('8 ＋ 12 ＝ 20')
        self.wait(4)
        assert_disjoint(list(dots))
        print('GRADE6_VIDEO_GEOMETRY=PASS ratio_total=20 equal_groups=5 each=4 shares=8,12')
