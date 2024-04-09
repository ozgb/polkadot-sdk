(function() {var type_impls = {
"sp_runtime":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DispatchError\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#613-622\">source</a><a href=\"#impl-DispatchError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.stripped\" class=\"method\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#615-621\">source</a><h4 class=\"code-header\">pub fn <a href=\"sp_runtime/enum.DispatchError.html#tymethod.stripped\" class=\"fn\">stripped</a>(self) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Return the same error but without the attached message.</p>\n</div></details></div></details>",0,"sp_runtime::TryRuntimeError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-DispatchError\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#563\">source</a><a href=\"#impl-Deserialize%3C'de%3E-for-DispatchError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de&gt; <a class=\"trait\" href=\"sp_runtime/trait.Deserialize.html\" title=\"trait sp_runtime::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#563\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_runtime/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(__deserializer: __D) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, __D::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</span></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"sp_runtime/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","sp_runtime::TryRuntimeError"],["<section id=\"impl-Copy-for-DispatchError\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#562\">source</a><a href=\"#impl-Copy-for-DispatchError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a></h3></section>","Copy","sp_runtime::TryRuntimeError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decode-for-DispatchError\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#562\">source</a><a href=\"#impl-Decode-for-DispatchError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Decode for <a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#562\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode</a>&lt;__CodecInputEdqy: Input&gt;(\n    __codec_input_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut __CodecInputEdqy</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, Error&gt;</h4></section></summary><div class='docblock'>Attempt to deserialise the value from input.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode_into\" class=\"method trait-impl\"><a href=\"#method.decode_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode_into</a>&lt;I&gt;(\n    input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut I</a>,\n    dst: &amp;mut <a class=\"union\" href=\"https://doc.rust-lang.org/1.75.0/core/mem/maybe_uninit/union.MaybeUninit.html\" title=\"union core::mem::maybe_uninit::MaybeUninit\">MaybeUninit</a>&lt;Self&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;DecodeFinished, Error&gt;<span class=\"where fmt-newline\">where\n    I: Input,</span></h4></section></summary><div class='docblock'>Attempt to deserialize the value from input into a pre-allocated piece of memory. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.skip\" class=\"method trait-impl\"><a href=\"#method.skip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">skip</a>&lt;I&gt;(input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut I</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, Error&gt;<span class=\"where fmt-newline\">where\n    I: Input,</span></h4></section></summary><div class='docblock'>Attempt to skip the encoded value from input. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_fixed_size\" class=\"method trait-impl\"><a href=\"#method.encoded_fixed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_fixed_size</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Returns the fixed encoded size of the type. <a>Read more</a></div></details></div></details>","Decode","sp_runtime::TryRuntimeError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-DispatchError\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#562\">source</a><a href=\"#impl-PartialEq-for-DispatchError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#562\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","sp_runtime::TryRuntimeError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-DispatchError\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#563\">source</a><a href=\"#impl-Serialize-for-DispatchError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"sp_runtime/trait.Serialize.html\" title=\"trait sp_runtime::Serialize\">Serialize</a> for <a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#563\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_runtime/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(&amp;self, __serializer: __S) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;__S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, __S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</span></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"sp_runtime/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","sp_runtime::TryRuntimeError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CArithmeticError%3E-for-DispatchError\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#697-701\">source</a><a href=\"#impl-From%3CArithmeticError%3E-for-DispatchError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sp_runtime/enum.ArithmeticError.html\" title=\"enum sp_runtime::ArithmeticError\">ArithmeticError</a>&gt; for <a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#698-700\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(e: <a class=\"enum\" href=\"sp_runtime/enum.ArithmeticError.html\" title=\"enum sp_runtime::ArithmeticError\">ArithmeticError</a>) -&gt; <a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a></h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<ArithmeticError>","sp_runtime::TryRuntimeError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MaxEncodedLen-for-DispatchError\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#562\">source</a><a href=\"#impl-MaxEncodedLen-for-DispatchError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl MaxEncodedLen for <a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.max_encoded_len\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#562\">source</a><a href=\"#method.max_encoded_len\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">max_encoded_len</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Upper bound, in bytes, of the maximum encoded size of this item.</div></details></div></details>","MaxEncodedLen","sp_runtime::TryRuntimeError"],["<section id=\"impl-StructuralEq-for-DispatchError\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#562\">source</a><a href=\"#impl-StructuralEq-for-DispatchError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a></h3></section>","StructuralEq","sp_runtime::TryRuntimeError"],["<section id=\"impl-StructuralPartialEq-for-DispatchError\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#562\">source</a><a href=\"#impl-StructuralPartialEq-for-DispatchError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a></h3></section>","StructuralPartialEq","sp_runtime::TryRuntimeError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CTransactionalError%3E-for-DispatchError\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#555-559\">source</a><a href=\"#impl-From%3CTransactionalError%3E-for-DispatchError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sp_runtime/enum.TransactionalError.html\" title=\"enum sp_runtime::TransactionalError\">TransactionalError</a>&gt; for <a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#556-558\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(e: <a class=\"enum\" href=\"sp_runtime/enum.TransactionalError.html\" title=\"enum sp_runtime::TransactionalError\">TransactionalError</a>) -&gt; <a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a></h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<TransactionalError>","sp_runtime::TryRuntimeError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Printable-for-DispatchError\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#740-776\">source</a><a href=\"#impl-Printable-for-DispatchError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"sp_runtime/traits/trait.Printable.html\" title=\"trait sp_runtime::traits::Printable\">Printable</a> for <a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.print\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#741-775\">source</a><a href=\"#method.print\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_runtime/traits/trait.Printable.html#tymethod.print\" class=\"fn\">print</a>(&amp;self)</h4></section></summary><div class='docblock'>Print the object.</div></details></div></details>","Printable","sp_runtime::TryRuntimeError"],["<section id=\"impl-Eq-for-DispatchError\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#562\">source</a><a href=\"#impl-Eq-for-DispatchError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a></h3></section>","Eq","sp_runtime::TryRuntimeError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-DispatchError\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#562\">source</a><a href=\"#impl-Clone-for-DispatchError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#562\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","sp_runtime::TryRuntimeError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3C%26str%3E-for-DispatchError\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#703-707\">source</a><a href=\"#impl-From%3C%26str%3E-for-DispatchError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#704-706\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(err: &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>) -&gt; <a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a></h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<&'static str>","sp_runtime::TryRuntimeError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-DispatchError\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#562\">source</a><a href=\"#impl-Encode-for-DispatchError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Encode for <a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#562\">source</a><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>If possible give a hint of expected size of the encoding. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_to\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#562\">source</a><a href=\"#method.encode_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode_to</a>&lt;__CodecOutputEdqy: Output + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    &amp;self,\n    __codec_dest_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut __CodecOutputEdqy</a>\n)</h4></section></summary><div class='docblock'>Convert self to a slice and append it to the destination.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convert self to an owned vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.using_encoded\" class=\"method trait-impl\"><a href=\"#method.using_encoded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">using_encoded</a>&lt;R, F&gt;(&amp;self, f: F) -&gt; R<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]) -&gt; R,</span></h4></section></summary><div class='docblock'>Convert self to a slice and then invoke the given closure with it.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_size\" class=\"method trait-impl\"><a href=\"#method.encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Calculates the encoded size. <a>Read more</a></div></details></div></details>","Encode","sp_runtime::TryRuntimeError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CBadOrigin%3E-for-DispatchError\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#640-644\">source</a><a href=\"#impl-From%3CBadOrigin%3E-for-DispatchError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"sp_runtime/traits/struct.BadOrigin.html\" title=\"struct sp_runtime::traits::BadOrigin\">BadOrigin</a>&gt; for <a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#641-643\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(_: <a class=\"struct\" href=\"sp_runtime/traits/struct.BadOrigin.html\" title=\"struct sp_runtime::traits::BadOrigin\">BadOrigin</a>) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<BadOrigin>","sp_runtime::TryRuntimeError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CTokenError%3E-for-DispatchError\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#691-695\">source</a><a href=\"#impl-From%3CTokenError%3E-for-DispatchError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"sp_runtime/enum.TokenError.html\" title=\"enum sp_runtime::TokenError\">TokenError</a>&gt; for <a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#692-694\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(e: <a class=\"enum\" href=\"sp_runtime/enum.TokenError.html\" title=\"enum sp_runtime::TokenError\">TokenError</a>) -&gt; <a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a></h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<TokenError>","sp_runtime::TryRuntimeError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeInfo-for-DispatchError\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#562\">source</a><a href=\"#impl-TypeInfo-for-DispatchError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl TypeInfo for <a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Identity\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Identity\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Identity</a> = <a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a></h4></section></summary><div class='docblock'>The type identifying for which type info is provided. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_info\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#562\">source</a><a href=\"#method.type_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">type_info</a>() -&gt; Type</h4></section></summary><div class='docblock'>Returns the static type identifier for <code>Self</code>.</div></details></div></details>","TypeInfo","sp_runtime::TryRuntimeError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-DispatchError\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#562\">source</a><a href=\"#impl-Debug-for-DispatchError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#562\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","sp_runtime::TryRuntimeError"],["<section id=\"impl-EncodeLike-for-DispatchError\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#562\">source</a><a href=\"#impl-EncodeLike-for-DispatchError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl EncodeLike for <a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a></h3></section>","EncodeLike","sp_runtime::TryRuntimeError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CLookupError%3E-for-DispatchError\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#634-638\">source</a><a href=\"#impl-From%3CLookupError%3E-for-DispatchError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"sp_runtime/traits/struct.LookupError.html\" title=\"struct sp_runtime::traits::LookupError\">LookupError</a>&gt; for <a class=\"enum\" href=\"sp_runtime/enum.DispatchError.html\" title=\"enum sp_runtime::DispatchError\">DispatchError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/lib.rs.html#635-637\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(_: <a class=\"struct\" href=\"sp_runtime/traits/struct.LookupError.html\" title=\"struct sp_runtime::traits::LookupError\">LookupError</a>) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<LookupError>","sp_runtime::TryRuntimeError"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()